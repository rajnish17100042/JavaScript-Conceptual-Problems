'use strict'
/*
2. We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0

*/

function sumSalary(salaries) {
    // I can check here if salaries is an object just did in problem1 
    let sum = 0;
    for (let prop in salaries) {  //here for..of loop will not work  ...objects are not iterable with for...of
        alert(`salary of ${prop} is ${salaries[prop]}.`);
        sum += salaries[prop];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

alert(`sum of salaries of all employees is: ${sumSalary(salaries)}`);

//return 0 if empty ...nothing to add 
salaries = {};
alert(`sum of salaries of all employees is: ${sumSalary(salaries)}`);
