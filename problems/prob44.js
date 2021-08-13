'use strict'

/*
44. Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

function sumInput() {
    let arr = [];
    let input, sum;
    sum = 0;
    while (true) {
        input = +prompt("Please Enter a Number")  //prompt() returns string so use unary + operator to convert to number

        if (input === null || input === "" || !(isFinite(input))) {
            alert('please enter a valid number')
            break;  //break the while loop
        }
        arr.push(input);
    }

    for (let num of arr) {
        sum += num;
    }
    return sum;

}



console.log(sumInput());