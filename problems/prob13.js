// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them



function filterRange(arr, a, b) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            array.push(arr[i]);
        }
    }
    return array
}

let arr = [10, 100, 40, 70, 30, 20, 30, 10];
a = +prompt("Enter the first value of range");
b = +prompt("Enter the second value of range");
let filtered = filterRange(arr, a, b);
alert(filtered); // 3,1 (matching values)
alert(arr); // 5,3,8,1 (not modified)