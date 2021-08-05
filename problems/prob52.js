// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

//iterative version
function sumTo(n) {
    //check if the number is finite
    if (!(isFinite(n))) {
        return `not a finite number`;
    }

    let sum = 0;
    for (let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}


// recursive version

function sumTo(n) {

    if (n == 0) {
        return 0;
    }


    return n + sumTo(n - 1);
}


function sumTo(n) {
    //check if the number is finite
    if (!(isFinite(n))) {
        return `not a finite number`;
    }


    let a = 1;
    let d = 1;

    return n / 2 * (2 * a + (n - 1) * d);
}




console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));