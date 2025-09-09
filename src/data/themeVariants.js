export const colorVariantSelector = (path, themeType) => {

    const themesColor = {

        defaultColors: {
            sidebarStyle: `bg-[var(--colCard)] border-none`,
            borderStyle: `border-[var(--colTextB)]`,
            cardStyleA: `bg-[var(--colCard)]`,
            cardStyleB: `bg-[var(--colBg)]`,
            cardStyleC: `bg-[var(--colCard)]`,
            cardStyleD: `bg-[var(--colBg)]`,
            cardStyleE: `bg-[var(--colCard)]`,
            cardStyleF: `bg-[var(--colBg)]`,
            textStyleA: `text-[var(--colTextA)]`,
            textStyleB: `text-[var(--colTextB)]`,
            placeHolderStyle: `placeholder:text-[var(--colTextB)]`,
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
            cardStyleC: `glass-card-b text-[white]`,
            cardStyleD: `glass-card-no-bg`,
            cardStyleE: `glass-card-no-bg`,
            cardStyleF: `glass-card-b`,
            textStyleA: `text-[white]`,
            textStyleB: `text-[#b7b7b7]`,
            placeHolderStyle: `placeholder:text-[#e3e3e3]`,
            hoverStyle: `hover:text-[#60a5fa] hover:border-[#60a5fa]`,
            openedSideBarMenuStyle: `bg-[#60a5fa] text-[white]`,
            SelectedSideBarMenuStyle: `text-[#60a5fa]`,
            bgStyleA: `bg-[#b7b7b7]`,
        }

    }

    let themeVar = null

    if (path.startsWith('/hospital') && themeType === 'hospital') {
        themeVar = themesColor.hospital
        return themeVar
    }


    themeVar = themesColor.defaultColors
    return themeVar


}
