function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return null;
    }
    else {
        let maxSalary = 0;
        let maxName = '';
        for (const [name, salary] of Object.entries(salaries)) {
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

// console.log(Object.keys(salaries));
// console.log(Object.values(salaries));
//const [name, salary] = Object.entries(salaries);
console.log(topSalary(salaries));