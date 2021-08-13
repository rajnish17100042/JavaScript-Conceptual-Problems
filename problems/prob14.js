'use strict'

/*
14. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.

For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/



function filterRangeInPlace(arr, a, b) {

    //we have to filter the original array i.e inplace filter
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;//important .. array length is decreased by 1 on splicing so index of element also change
        }
    }

}

let arr = [10, 20, 30, 40, 50, 60, 70];
let a = +prompt("Enter the first value of range");
let b = +prompt("Enter the second value of range");
filterRangeInPlace(arr, a, b);
alert(arr);
