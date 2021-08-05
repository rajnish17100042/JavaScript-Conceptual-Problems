// returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
    let date = new Date();
    nextdate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    milliseconds = nextdate.getTime() - date.getTime();
    seconds = Math.round(milliseconds / 1000);
    ms = nextdate - date;

    // console.log(ms/1000);
    // console.log(milliseconds/1000);

    return seconds;

}

console.log(getSecondsToTomorrow());

