
import dayjs from 'dayjs'

export const TODAY = new Date().getDate();
export const CURR_MONTH = new Date().getMonth();
export const CURR_YEAR = new Date().getFullYear();
export const CURR_DATE = dayjs(new Date()).format('YYYY-MM-DD')