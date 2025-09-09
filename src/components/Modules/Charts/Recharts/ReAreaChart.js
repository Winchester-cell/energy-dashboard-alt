import { colorVariantSelector } from '@/data/themeVariants';
import { useThemeTypeStore } from '@/stores/useThemeTypeStore';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


export default function ReAreaChart() {


    const { themeType } = useThemeTypeStore()
    const pathname = usePathname()
    const style = colorVariantSelector(pathname, themeType)

    const data = [
        { hour: "0", actual: 20, predicted: 22 },
        { hour: "2", actual: 18, predicted: 21 },
        { hour: "4", actual: 25, predicted: 23 },
        { hour: "6", actual: 30, predicted: 28 },
        { hour: "8", actual: 35, predicted: 33 },
        { hour: "10", actual: 40, predicted: 42 },
        { hour: "12", actual: 38, predicted: 40 },
        { hour: "14", actual: 45, predicted: 47 },
        { hour: "16", actual: 50, predicted: 55 },
        { hour: "18", actual: 42, predicted: 46 },
        { hour: "20", actual: 37, predicted: 41 },
        { hour: "22", actual: 33, predicted: 35 },
    ];

    return (
        <div className={`w-full h-96 rounded-2xl shadow-md p-5 my-5 ${style.cardStyleA}`}>
            <h2 className="text-xl font-semibold mb-4">تعداد بیماران (۲۴ ساعت گذشته و آینده)</h2>
            <ResponsiveContainer width="100%" height="100%" style={{ padding: 40 }}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" label={{ value: "", position: "insideBottom", offset: -5 }} />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Legend />

                    {/* بیماران واقعی */}
                    <Area
                        type="monotone"
                        dataKey="actual"
                        name="واقعی"
                        stroke="#94d66e"
                        fill="#94d66e"
                        fillOpacity={0.3}
                    />

                    {/* بیماران پیش‌بینی‌شده */}
                    <Area
                        type="monotone"
                        dataKey="predicted"
                        name="پیش‌بینی"
                        stroke="#60a5fa"
                        fill="#60a5fa"
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
