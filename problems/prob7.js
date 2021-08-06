// 7. Create an object calculator with three methods:

// - read() prompts for two values and saves them as object properties.
// - sum() returns the sum of saved values.
// // - mul() multiplies saved values and returns the result.


let calculator = {
    x: 0,
    y: 0,
    read() {
        x = +prompt("Please Enter the first number");
        y = +prompt("Please Enter the second number");
    },
    sum() {
        alert("sum=" + (x + y));
    },
    mul() {
        alert("product=" + (x * y));
    }
};


calculator.read();
calculator.sum();
calculator.mul();