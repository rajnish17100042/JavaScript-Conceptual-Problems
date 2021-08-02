/*Problem1
let schedule = {};
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
alert(isEmpty(schedule));

function isEmpty(schedule) {
    if (Object.keys(schedule).length === 0) {
        return true;
    }
    else {
        return false;
    }

}*/

/*problem2

let sum = 0;

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
alert(sumofsalaries(salaries));

salaries = {};

alert(sumofsalaries(salaries));

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
}*/

/*problem3

let menu = {
    width: 800,
    height: 900,
    title: "My menu"
}

multiplyNumeric(menu);
function multiplyNumeric(menu) {
    for (const men in menu) {
        if (Number.isInteger(menu[men])) {
            menu[men] *= 2;
        }

    }
}

alert(menu.width);
alert(menu.height);
*/

//problem4
//problem5
//problem6 not done

/*problem6
function makeUser() {
    return {
        name: "John"
    };
};

let user = makeUser();
alert(user.ref.name);



*/

/*problem 7
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

*/



/*problem8
var ladder = {
    step: 0,
    up: function (step) {
        this.step += 1;
        return this;
    },

    down: function () {
        this.step -= 1;
        return this;
    },
    showStep: function () {
        alert(this.step)
    },

}
ladder.up().up().up().up().down().showStep();

*/





/*problem9

//let a = prompt("Enter the first Number");//prompt() returns string value
//let b = prompt("Enter the second Number");
//alert(parseInt(a) + parseInt(b));

function Calculator() {

  this.read = function () {
      this.x = parseInt(prompt("Please Enter the first number"));//string to int
      this.y = +prompt("Please enter the second number");//string to int
  };

  this.sum = function () {
      return this.x + this.y;
  };

  this.mul = function () {
      return this.x * this.y;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

*/

/*problem10

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("enter the number you want to add");
    };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

*/

//07-07-2021
/*problem11

var numbers = [1, 1, 1, 0, 0, 0, 0];

//shifting the array element in right direction
let len = numbers.length;
alert("initial input :" + " " + numbers)
let choice;
do {
    let temp = numbers[len - 1];
    for (var i = len - 1; i > 0; i--) {
        numbers[i] = numbers[i - 1];
    }
    numbers[0] = temp
    alert("next output: " + " " + numbers);
    choice = +prompt("want to display next output enter 1 or 0");
}
while (choice != 0);

*/

/*problem12

function camelize(str) {
    var temp = str.split('');
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == "-") {
            temp[i + 1] = temp[i + 1].toUpperCase();
            temp.splice(i, 1)
        }
    }
    str = temp.join('');

    return str

};

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));

*/

/*problem13

function filterRange(arr, a, b) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            array.push(arr[i]);
        }
    }
    return array
}

let arr = [10, 100, 40, 70, 30, 20, 30, 10];
a = +prompt("Enter the first value of range");
b = +prompt("Enter the second value of range");
let filtered = filterRange(arr, a, b);
alert(filtered); // 3,1 (matching values)
alert(arr); // 5,3,8,1 (not modified)

*/
/*problem14

function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }

}

let arr = [5, 3, 8, 1];
a = +prompt("Enter the first value of range");
b = +prompt("Enter the second value of range");
filterRangeInPlace(arr, a, b);
alert(arr); 

*/

/*problem15
let arr = [5, 2, 1, -10, 8];
arr.sort();
arr.reverse();
alert(arr)

//or

//let array = [5, 2, 1, -10, 8];
//array.sort(function (a, b) { return b - a });
//alert(array)

*/

/*problem16

function copySorted(arr) {
    let array = arr.slice();
    array.sort(function (a, b) { return a.length - b.length });
    return array;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
alert(sorted);
alert(arr); 

*/

//problem17


/*problem18

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);

alert(names);

*/

/*problem19

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(function (user) {
    return {
        fullName: `${user.name}  ${user.surname}`,
        id: `${user.id}`
    };
});

alert(usersMapped[0].id)
alert(usersMapped[0].fullName)

*/

/*problem20

function sortByName(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

users.sort(sortByName);

alert(users[1].name);

*/

/*problem21

function unique(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(array.includes(arr[i]))) {
            array.push(arr[i]);
        }
    }
    return array;
}

//or
//function unique(arr) {
//  return Array.from(new Set(arr));
//}
//
//does the same thing
//

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings));

*/

/*problem22  ... object destructuring 

let user = { name: "John", years: 30, isAdmin: 'true' };
//let user = { name: "John", years: 30 };//default case
let { name: name, years: age, isAdmin = 'false' } = user;
alert(name);
alert(age);
alert(isAdmin);

*/





