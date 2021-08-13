'use strict'

/*
8. There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Modify the code of up and down to make the calls chainable, like this:

ladder.up().up().down().showStep(); // 1
*/


let ladder = {

    step: 0,

    up() {
        this.step++; // this.step+=1  or ladder.step++
        return this;  // same as (return ladder;)
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        alert(`The value of step is: ${this.step}`);
        return this;
    },

};

ladder.up().up().down().showStep();
// ladder.showStep().up().showStep().down().down().down().showStep();  //this will also     