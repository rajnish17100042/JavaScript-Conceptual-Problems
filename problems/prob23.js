'use strict'

/*
23. There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
*/

function topSalary(salaries) {

    // check if object is empty

    if (Object.keys(salaries).length === 0) {
        return null;
    }
    else {
        let maxSalary = 0;
        let maxName = '';
        // use array destructuring
        for (let [name, salary] of Object.entries(salaries)) {
            if (maxSalary < salary) {
                maxSalary = salary;
                maxName = name;
            }
        }
        return maxName;
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// console.log(Object.keys(salaries));  //return the array of keys(here names)
// console.log(Object.values(salaries));  //return the array of salaries
//const [name, salary] = Object.entries(salaries); //array destructuring
console.log(topSalary(salaries));