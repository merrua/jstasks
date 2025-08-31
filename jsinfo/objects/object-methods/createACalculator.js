// Create an object calculator with three methods:
// read() prompts for two values
// and saves them as object properties
// with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values
// and returns the result.

let calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = prompt("Enter the first value. ");
    this.b = prompt("Enter the second value. ");
  },

  sum() {
    return Number(this.a) + Number(this.b);
  },

  mul() {
    return Number(this.a) * Number(this.b);
  },
};
// calculator.read = function(){
//   calculator.a = prompt("Enter the first value. ");
//   calculator.b = prompt("Enter the second value. ");
// }

calculator.read();
alert(`Sum:  ${calculator.sum()}`);
alert(`Multi: ${calculator.mul()}`);
