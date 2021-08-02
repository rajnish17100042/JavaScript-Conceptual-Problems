let sum = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(sumofsalaries(salaries));

salaries = {};

console.log(sumofsalaries(salaries));

function sumofsalaries(salaries) {
    if (Object.keys(salaries).length === 0) {
        sum = 0;
    }
    else {
        for (const salary in salaries) {
            sum += salaries[salary]
        }

    }

    return sum;
}