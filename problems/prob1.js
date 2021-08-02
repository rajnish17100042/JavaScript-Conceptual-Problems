let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

function isEmpty(schedule) {
    if (Object.keys(schedule).length === 0) {
        return true;
    }
    else {
        return false;
    }
}