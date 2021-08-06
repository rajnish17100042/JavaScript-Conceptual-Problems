// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
    let array = arr.slice();
    array.sort(function (a, b) { return a.length - b.length });
    return array;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
alert(sorted);
alert(arr); 