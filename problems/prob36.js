'use strict'

/*
36. Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
P.S. Here strings are used, but can be values of any type.
*/

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