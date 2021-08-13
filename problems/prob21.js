'use strict'

/*
21. Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        // check the element in the new array
        if (!(newarr.includes(arr[i]))) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}



let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings));