// Write a function fib(n) that returns the n-th Fibonacci number.
//   fibonacci series : 1 1 2 3 5 8 13 ...

function fib(n) {
    let a = 1;
    let b = 1;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));