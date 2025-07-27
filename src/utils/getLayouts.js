const getLayouts = (widgets) => {
  const layouts = {
    lg: widgets.map(w => w.layout.lg[0]),
    md: widgets.map(w => w.layout.md[0]),
    sm: widgets.map(w => w.layout.sm[0]),
  }

  return layouts

}

export default getLayouts