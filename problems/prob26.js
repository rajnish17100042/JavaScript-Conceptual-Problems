function getWeekDay(date) {
    if (date.getDay() == 0) {
        return ((date.getDay() + 7));
    }
    else {
        return (date.getDay());
    }
}



let date = new Date(2012, 0, 8);

console.log(getWeekDay(date));