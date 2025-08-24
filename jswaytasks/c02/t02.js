// Improved hello
// Write a program that asks the user for his first
// name and his last name.
// The program then displays them in one sentence.

const name1 = prompt("Enter your first name");
const surname1 = prompt("Enter your second name");
alert(`${name1} ${surname1}`);

// VAT calculation
// Write a program that asks the user for a raw price.
// After that, it calculates the corresponding
// final price using a VAT rate of 20.6%.

const rawPrice = parseFloat(prompt("Enter the raw price"));
let vat = parseFloat(rawPrice) / parseFloat(20.6);
let finalPrice = parseFloat(rawPrice) + parseFloat(vat);
alert(finalPrice);

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees,
// then displays it in Fahrenheit degrees.
// The conversion between scales is given by the
// formula: [°F] = [°C] x 9/5 + 32.
