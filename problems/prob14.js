// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }

}

let arr = [5, 3, 8, 1];
a = +prompt("Enter the first value of range");
b = +prompt("Enter the second value of range");
filterRangeInPlace(arr, a, b);
alert(arr);