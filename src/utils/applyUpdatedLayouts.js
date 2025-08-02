export default function applyUpdatedLayouts(widgets, allLayouts) {
  return widgets?.map((widget) => {

    const newLayoutConfig = {};
    console.log(allLayouts);


    for (const breakpoint in allLayouts) {
      const layoutList = allLayouts[breakpoint];
      const foundLayout = layoutList.find((l) => l.i === widget.widget_id);
      if (foundLayout) {
        newLayoutConfig[breakpoint] = [foundLayout];
      }
    }

    if (Object.keys(newLayoutConfig).length > 0) {
      return {
        ...widget,
        layout: {
          ...widget.layout,
          ...newLayoutConfig,
        },
      };
    }

    return widget;
  });
}
