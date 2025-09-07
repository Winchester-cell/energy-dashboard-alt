export const selectBoxStyle = {
    control: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: 'var(--colBg)',
        border: 'none',
        borderRadius: 9999,
        padding: 15,
        paddingInlineStart: 25,
        outline: 'none',
        boxShadow: 'none',
    }),
    singleValue: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextA)',
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextB)',
    }),
    dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextB)', // ← رنگ فلش
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: 'var(--colBg)',
        borderRadius: '2rem',
        overflow: 'hidden',
        padding: 15,
        zIndex: 9999,
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: 10,
        backgroundColor: state.isFocused
            ? 'var(--textHover)'
            : 'var(--colBg)',
        color: state.isFocused ? 'var(--colTextA)' : 'var(--colTextB)',
        cursor: 'pointer',
    }),
    multiValue: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: 'none',
        overflow: 'hidden',
    }),
    multiValueLabel: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextA)',
    }),
    multiValueRemove: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextB)',
        ':hover': {
            backgroundColor: 'var(--textHover)',
            color: 'var(--colTextA)',
        },
        borderRadius: 99999
    }),
    menuList: (baseStyles) => ({
        ...baseStyles,
        maxHeight: 200,
        overflowY: "auto",
    }),
}


export const selectBoxGlassStyle = {
    control: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: '#ffffff1f',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: 9999,
        padding: 0,
        paddingInlineStart: 25,
        backdropFilter: 'blur(10px)',
        outline: 'none',
        accentColor: '#e3e3e3',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)',
    }),
    singleValue: (baseStyles) => ({
        ...baseStyles,
        color: '#e3e3e3',
    }),
    input: (baseStyles) => ({
        ...baseStyles,
        color: '#e3e3e3', // ✅ متن تایپ شده
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: '#e3e3e3',
    }),
    dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: '#e3e3e3', // ← رنگ فلش
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: '#ffffff1f',
        borderRadius: '2rem',
        overflow: 'hidden',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2)',
        padding: 15,
        fontFamily:"Yekan",
        direction:`rtl`,
        zIndex: 99999,
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: 10,
        backgroundColor: state.isFocused
            ? '#60a5fa'
            : 'none',
        color: state.isFocused ? '#e3e3e3' : '#e3e3e3',
        cursor: 'pointer',
    }),
    multiValue: (baseStyles) => ({
        ...baseStyles,
        backgroundColor: 'none',
        overflow: 'hidden',
    }),
    multiValueLabel: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextA)',
    }),
    multiValueRemove: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--colTextB)',
        ':hover': {
            backgroundColor: 'var(--textHover)',
            color: 'var(--colTextA)',
        },
        borderRadius: 99999
    }),
    menuList: (baseStyles) => ({
        ...baseStyles,
        maxHeight: 300,
        overflowY: "auto",
    }),
}