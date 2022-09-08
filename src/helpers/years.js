export const years = () => { 
    let startYear = 1922;
    const yearsArray = new Array(200).fill(null).map(() => {
        return startYear++
    })
    return yearsArray
}

