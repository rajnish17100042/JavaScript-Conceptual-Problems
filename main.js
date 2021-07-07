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