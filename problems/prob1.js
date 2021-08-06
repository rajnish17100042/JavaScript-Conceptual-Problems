// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(schedule) {
    if (Object.keys(schedule).length === 0) {
        return true;
    }
    else {
        return false;
    }
}


let schedule = {};
console.log(isEmpty(schedule)); // true

// now we add property to the object

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

