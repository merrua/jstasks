const r = Number(prompt("Enter the circle radius:"));

// create the circle object here
const circle = {
  radius: r,
  pie: 3.14159265,

  circumference() {
    return `${r * 2 * this.pie}`;
  },

  area() {
    return `${this.pie * r * 2}`;
  },
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
