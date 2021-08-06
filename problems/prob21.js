// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(array.includes(arr[i]))) {
            array.push(arr[i]);
        }
    }
    return array;
}



let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings));