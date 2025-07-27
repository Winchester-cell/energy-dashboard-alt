'use client'
import { IoClose } from "react-icons/io5";
import useDynamicDashboardStore from "@/stores/useDynamicDashboardStore";
import applyUpdatedLayouts from "@/utils/applyUpdatedLayouts";
import getLayouts from "@/utils/getLayouts";
import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import createWidgetElem from "@/utils/widgetsUtils/generateWidgetsElement";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardGrid() {

    const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
    const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
    const { isEditing, setIsEditing, widgets, setWidgets } = useDynamicDashboardStore()
    const [layouts, setLayouts] = useState()

    const handleLayoutChange = (currentLayout, allLayouts) => {
        setLayouts(allLayouts);
        const updatedWidgets = applyUpdatedLayouts(widgets, allLayouts);
        const isDifferent = JSON.stringify(updatedWidgets) !== JSON.stringify(widgets);
        if (isDifferent) {
            setWidgets(updatedWidgets);
        }
    }

    const deleteWidget = (e, widgetsID) => {
        e.stopPropagation()
        const newWidgets = widgets.filter(widget => widget.widget_id !== widgetsID)
        setWidgets(newWidgets)
    }

    return (
        <div className="p-4 min-h-screen">

            <div style={{ direction: "ltr" }} className={`${isEditing ? `bg-gray-400` : ``}`}>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={getLayouts(widgets)}
                    breakpoints={breakpoints}
                    cols={cols}
                    rowHeight={30}
                    isResizable
                    isDraggable
                    draggableHandle=".drag-handle"
                    onLayoutChange={handleLayoutChange}
                >
                    {
                        widgets?.map(w => {
                            return (
                                <div key={w.widget_id} className="bg-[var(--colCard)] drag-handle rounded-xl shadow-lg relative" dir="rtl">
                                    {
                                        isEditing &&
                                        <IoClose
                                            onMouseDown={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault()
                                            }}
                                            onClick={(e) => deleteWidget(e, w.widget_id)}
                                            className="absolute top-2 left-2 w-5 h-5 cursor-pointer"
                                        />
                                    }
                                    {createWidgetElem(w.widget_type, w.config)}
                                </div>
                            )
                        })
                    }
                </ResponsiveGridLayout>
            </div>
        </div>
    );
}
