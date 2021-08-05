// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

function sumSalaries(salaries) {
    let salarySum = 0;
    if (Object.keys(salaries).length === 0) {
        return 0;
    }
    for (let salary of Object.values(salaries)) {  //object destructuring is used
        if (isFinite(salary)) {
            salarySum += salary;
        }
    }

    return salarySum;
}




let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// let salaries = {};   testing for the empty object

console.log(sumSalaries(salaries));