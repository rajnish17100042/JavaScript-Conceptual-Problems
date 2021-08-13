'use strict'
/* 
13. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
The function should not modify the array. It should return the new array.

For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

function filterRange(arr, a, b) {
    // let's create an empty array to filter the original array
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newarr.push(arr[i]);
        }
    }
    return newarr
}

let arr = [10, 20, 30, 40, 50, 60, 70];
let a = +prompt("Enter the first value of range");
let b = +prompt("Enter the second value of range");
let filtered = filterRange(arr, a, b);
alert(filtered);
alert(arr); 