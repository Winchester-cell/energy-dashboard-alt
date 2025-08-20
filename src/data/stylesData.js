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
        borderRadius:10,
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
}