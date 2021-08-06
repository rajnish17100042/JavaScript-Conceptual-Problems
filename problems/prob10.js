// Create a constructor function Accumulator(startingValue)


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