// The task is to write a function factorial(n) that calculates n! using recursive calls.

function factorial(n) {

    // 0! = 1 
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1)

}



console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(0));