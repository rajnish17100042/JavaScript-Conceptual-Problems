function getDateAgo(date, days) {
    newdate = new Date(date);
    newdate.setDate(newdate.getDate() - days);
    return newdate.getDate();

}

let date = new Date(2015, 0, 2);
// console.log(date.getDate()
// console.log(date.getDate(date.setDate(25)));
console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365)); 