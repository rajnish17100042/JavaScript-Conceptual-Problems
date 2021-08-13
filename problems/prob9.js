'use strict'

/*
9. Create a constructor function Calculator that creates objects with 3 methods:

- read() asks for two values using prompt and remembers them in object properties.
- sum() returns the sum of these properties.
- mul() returns the multiplication product of these properties.
*/

//constructor is a special type of function which is created using new operator 
//also it a convention that name of constructor function should start with capital letter  not mandatory 

function Calculator() {
    // this={}   implicitly done by the constructor itself
    let num1 = 0, num2 = 0;

    this.read = function () {
        alert(`Inside the read function. \nPlease enter two numbers`);
        num1 = +prompt("Enter the first number");
        num2 = +prompt("Enter the second number");
        this.num1 = num1; //adding  property to the object this
        this.num2 = num2;
    }

    this.sum = function () {
        return num1 + num2;
    }

    this.mul = function () {
        return num1 * num2;
    }

    // return this  //done implicitly 
}


let calculator = new Calculator();  //return this object to calculator

//if no argument is passed to the paranthesis can be omitted
// let calculator = new Calculator;



calculator.read();
alert(`sum of the two numbers ${calculator.num1}  and ${calculator.num2} is: ${calculator.sum()}`);
alert(`product of the two numbers ${calculator.num1}  and ${calculator.num2} is: ${calculator.mul()}`);