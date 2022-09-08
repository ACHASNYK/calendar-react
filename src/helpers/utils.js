// import dayjs from "dayjs";

export function getMonth(month, year) {

    let firstDayMonth = (new Date(year, month)).getDay() - 1;
    if (firstDayMonth < 0) { firstDayMonth = 6 };
    
    let rows = null;
    firstDayMonth >4 ? rows = 6 : rows = 5;

    let currentDay = 0 - (firstDayMonth);
    const arrayMonth = new Array(rows).fill([]).map(() => {
        return new Array(7).fill(null).map(() => { 
            currentDay++;
            return ({
                id: new Date(year, month, currentDay),
                record: [{
                    title: '',
                    description: '',
                    time: '',
                    created: '',
                    updated:''
                }]
            })
        } )
    })
    
    return arrayMonth;   
}