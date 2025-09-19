// The machine can exclusively process these coins and notes:
//  £5, £2, £1, 50p, 20p.
// Any coins and notes which are not accepted by the machine will be returned

// This change machine is programmed to accept and distribute strings rather than numbers.
// The input will be a string containing the coin or note to be processed,
//  and the change should be returned as one string
// with the coin names separated by single spaces with no commas.
// The values of the string should be in descending order.
// For example, an input of "50p" should yield the exact string "20p 20p 10p".
// change in 20p and 10p coins.

function changeMe(moneyIn) {
  if (moneyIn === "£5") return `${"20p ".repeat(5 * 5).trimEnd()}`;
  if (moneyIn === "£2") return `${"20p ".repeat(5 * 2).trimEnd()}`;
  if (moneyIn === "£1") return `${"20p ".repeat(5 * 1).trimEnd()}`;
  if (moneyIn === "50p") return `${"20p ".repeat(2).trimEnd()} 10p`;
  if (moneyIn === "20p") return `${"10p ".repeat(2).trimEnd()}`;

  return moneyIn;
}

console.log(changeMe("£5"));
console.log(changeMe("£1"));
