// returns the number of seconds from the beginning of today

function getSecondsToday() {
    date = new Date();
    seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return seconds;

}


console.log(getSecondsToday())