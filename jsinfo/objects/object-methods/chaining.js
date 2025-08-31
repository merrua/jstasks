//here’s a ladder object that
// allows you to go up and down:

let ladder = {
  step: 0,

  up() {
    this.step++;
    console.log("Up:" + this.step);
    return this;
  },
  down() {
    this.step--;
    console.log("Down: " + this.step);
    return this;
  },
  showStep() {
    // shows the current step
    alert(this.step);
    return this;
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep();
