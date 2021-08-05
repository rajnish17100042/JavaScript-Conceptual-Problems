function unique(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(array.includes(arr[i]))) {
            array.push(arr[i]);
        }
    }
    return array;
}

// or
// function unique(arr) {
//  return Array.from(new Set(arr));
// }

// does the same thing


let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));