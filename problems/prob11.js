// Write a JS code to have following series as output

var numbers = [1, 1, 1, 0, 0, 0, 0];

//shifting the array element in right direction
let len = numbers.length;
alert("initial input :" + " " + numbers)
let choice;
do {
    let temp = numbers[len - 1];
    for (var i = len - 1; i > 0; i--) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = temp
    alert("next output: " + " " + numbers);
    choice = +prompt("want to display next output enter 1 or 0");
}
while (choice != 0);