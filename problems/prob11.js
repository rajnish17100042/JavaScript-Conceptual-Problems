'use strict'

/*
11. Write a JS code to have following series as output
Note: Use arrays

Initial input  1 1 1 0 0 0 0
next output    0 1 1 1 0 0 0 
next output    0 0 1 1 1 0 0
next output    ....
next output    0 0 0 0 1 1 1 
next output    1 0 0 0 0 1 1
*/

function shiftElementRight(arr) {
    let arrayLength = arr.length;
    let temp = arr[arrayLength - 1];

    for (let i = arrayLength - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;

}


let arr = [1, 1, 1, 0, 0, 0, 0];
let choice;
alert(`Initial input  is ${arr}`);

do {

    alert(`Next output is : ${shiftElementRight(arr)}`);
    choice = +prompt(`You want next output?? \n Press 1 for yes, 0 for No)`);
} while (choice);