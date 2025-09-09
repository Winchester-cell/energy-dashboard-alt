export const colorVariantSelector = (path) => {

    const themesColor = {

        defaultColors: {
            sidebarStyle: `bg-[var(--colCard)] border-none`,
            borderStyle: `border-[var(--colTextB)]`,
            cardStyleA: `bg-[var(--colCard)]`,
            cardStyleB: `bg-[var(--colBg)]`,
            cardStyleC: `bg-[var(--colCard)]`,
            textStyleA: `text-[var(--colTextA)]`,
            textStyleB: `text-[var(--colTextB)]`,
            hoverStyle: `hover:text-[var(--textHover)] hover:border-[var(--textHover)]`,
            openedSideBarMenuStyle: `bg-[var(--textHover)] text-[white]`,
            SelectedSideBarMenuStyle: `text-[var(--textHover)]`,
            bgStyleA: `bg-[var(--colTextB)]`,
        },

        hospital: {
            sidebarStyle: `bg-[#ffffff0d] border-e-2 border-[#ffffff29] glass-sidebar`,
            borderStyle: `border-[#b7b7b7]`,
            cardStyleA: `glass-card text-[white]`,
            cardStyleB: `glass-card-b text-[white]`,
            cardStyleB: `glass-card-b text-[white]`,
            textStyleA: `text-[white]`,
            textStyleB: `text-[#b7b7b7]`,
            hoverStyle: `hover:text-[#60a5fa] hover:border-[#60a5fa]`,
            openedSideBarMenuStyle: `bg-[#60a5fa] text-[white]`,
            SelectedSideBarMenuStyle: `text-[#60a5fa]`,
            bgStyleA: `bg-[#b7b7b7]`,
        }

    }

    let themeVar = null

    if (path.startsWith('/hospital')) {
        themeVar = themesColor.hospital
        return themeVar
    }


    themeVar = themesColor.defaultColors
    return themeVar


}
