'use strict'

/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
*/

function Accumulator(startingValue) {
    this.value = startingValue;

    //add read property which is a function to the object (this)
    this.read = function () {
        let userInput, choice;

        do {
            alert(`curent value is: ${this.value}`);
            userInput = +prompt('Enter the number you want to add to the current value');
            this.value += userInput;
            alert(`current value after your entry is: ${this.value} `);
            choice = +prompt('Do you  want to add more to the current value\n Enter 1 for yes and 0 for no ');
        } while (choice);
    }

}

let startingValue = +prompt('Please enter the any number as a starting value');
let accumulator = new Accumulator(startingValue);
accumulator.read();

alert(`The current value is: ${accumulator.value}`);

