// 9. Create a constructor function Calculator that creates objects with 3 methods:

// - read() asks for two values using prompt and remembers them in object properties.
// - sum() returns the sum of these properties.
// - mul() returns the multiplication product of these properties.


function Calculator() {

    this.read = function () {
        this.x = parseInt(prompt("Please Enter the first number"));//string to int
        this.y = +prompt("Please enter the second number");//string to int
    };

    this.sum = function () {
        return this.x + this.y;
    };

    this.mul = function () {
        return this.x * this.y;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());