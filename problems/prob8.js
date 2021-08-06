// Modify the code of up and down to make the calls chainable,

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