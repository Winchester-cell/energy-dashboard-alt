const getLayouts = (widgets) => {
  const layouts = {
    lg: widgets.map(w => w.layoutConfig.lg[0]),
    md: widgets.map(w => w.layoutConfig.md[0]),
    sm: widgets.map(w => w.layoutConfig.sm[0]),
  }

  return layouts
  
}

export default getLayouts