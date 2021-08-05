// Implement the function, pow(number, power), that raises a "number" to "power".


// 	1. Iterative approach

function power(num, pow) {
    let result = 1;
    // If num^0 return 1
    if (pow == 0) {
        return 1;
    }
    //  0^pow=0
    if (num == 0) {
        return 0;
    }
    for (let i = 0; i < pow - 1; i++) {
        result *= num;
    }
    return result;
}


// 	2. Recursive approach
// function power(num, pow) {

//     //  num^0 =1
//     if (pow == 0) {
//         return 1;
//     }
//     //  0^pow=0
//     if (num == 0) {
//         return 0;
//     }
//     // For all other cases
//     return num * power(num, pow - 1);
// }




console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));