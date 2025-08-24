let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

// Final values
// nb1=nb2=nb3=4
// nb1 is 0, nb2 = 4, nb3 = 12

// nb1=4,nb2=3,nb3=2
// nb1 = 4, nb2 = 3, nb3 = 2

//nb1=2,nb2=4,nb3=0
// nb1 = 3, nb2 = 4, nb3 = 0
