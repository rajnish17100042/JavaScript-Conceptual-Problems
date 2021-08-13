'use strict'

/*
7. Create an object calculator with three methods:

- read() prompts for two values and saves them as object properties.
- sum() returns the sum of saved values.
- mul() multiplies saved values and returns the result.

*/

let num1, num2;

let calculator = {
    num1: 0,
    num2: 0,

    read: function () {    //same thing can be shorthanded to read(){....}  
        alert('You are in read function just enter two numbers\n')
        num1 = +prompt('Please Enter first number\n');
        num2 = +prompt('Please enter second number\n');
        this.num1 = num1;  //same as calculator.num1=num1
        calculator.num2 = num2;
    },

    sum: function () {     //same thing can be shorthanded to sum(){....}  
        return (num1 + num2);
    },

    mul: function () {   //same thing can be shorthanded to mul(){....}  
        return (num1 * num2);
    }
}

calculator.read();
alert(`first number is  ${calculator.num1}`);
alert(`second  number is  ${calculator['num2']}`);//using square bracket

alert(`sum of two numbers ${num1} and ${num2} is: ${calculator.sum()}`);   //calling sum function using dot notation
alert(`product of two numbers ${num1} and ${num2} is: ${calculator['mul']()}`);//calling mul function using square bracket