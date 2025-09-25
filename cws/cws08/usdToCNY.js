// converts US dollars (USD) to Chinese Yuan (CNY) .
// The input is the amount of USD as an integer,
// and the output should be a string
// that states the amount of Yuan followed by 'Chinese Yuan'
// conversion rate you should use is
// 6.75 CNY for every 1 USD.
// string with 2 decimal place

function usdcny(usd) {
  let num = usd * 6.75;
  let result = (Math.round(num * 100) / 100).toFixed(2);
  return `${result.toString()} Chinese Yuan`;
}

console.log(usdcny(15)); //'101.25 Chinese Yuan'
