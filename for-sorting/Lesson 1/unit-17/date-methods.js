const date = new Date();

const year = date.getFullYear(); // year (YYYY)
const month = date.getMonth(); // month (0-11)
const day = date.getDate(); // day of the month (1-31)
const weekDay = date.getDay(); // day of the week (0-6)
const hours = date.getHours(); // hours
const min = date.getMinutes(); // minutes
const sec = date.getSeconds(); // seconds
const timestamp = date.getTime(); // ms from 01.01.1970

date.setFullYear(2000);
date.setMonth(1);
date.setDate(20);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(30);
date.setMilliseconds(500);

console.log(+date); // ms from 01.01.1970

new Date('2000-01-01') < new Date('2001-01-01') // true
