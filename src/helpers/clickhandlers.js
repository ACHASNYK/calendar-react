const plusClick = (set, value) => {
    if (value.month < 11) {
        set({ ...value, month: value.month+1 })
    } else
        if (value.month === 11) { set({ month: 0, year: value.year + 1 }) }
};

const minusClick = (set, value) => {
    if (value.month > 0) { set({ ...value, month: value.month-1 }) } else
        if (value.month === 0) { set({ month: 11, year: value.year - 1 }) }
        
}

export {plusClick, minusClick}