// get last day of month


function getLastDayOfMonth(year, month) {

    // console.log(new Date(year, month));
    // date = new Date(year, month, 0); day 0 will give the date of last date of previous month
    // console.log(date)
    date = new Date(year, month + 1, 0)
    // console.log(date);
    return date.getDate();

}


console.log(getLastDayOfMonth(2012, 1))