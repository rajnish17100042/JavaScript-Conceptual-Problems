'use strict'

/*
1. Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
Should work like that:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );

*/

function isEmpty(obj) {
    // first check if obj is an object
    if (!(typeof obj === 'object')) {
        return 'obj is not an object';
    }

    let properties = [];
    for (let prop in obj) {
        properties.push(prop);
    }

    return (properties.length == 0);
}

// let schedule = '';
let schedule = {};
alert(isEmpty(schedule));

schedule['8:30'] = 'get up';  //to add this type(8:30) of property name dot notation will not work, square bracket works

alert(isEmpty(schedule));

