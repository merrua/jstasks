// Create a constructor function Calculator
// that creates objects with 3 methods:
//     read() prompts for two values
// and saves them as object properties
// with names a and b respectively.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product
//  of these properties.

function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function () {
    this.a = Number(prompt("Enter the first value. "));
    this.b = Number(prompt("Enter the second value. "));
  };

  this.sum = function () {
    return Number(this.a) + Number(this.b);
  };

  this.mul = function () {
    return Number(this.a) * Number(this.b);
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
