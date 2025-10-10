function findMultiples(integer, limit) {
  let result = [];

  let i = integer;
  do {
    result.push(i);
    i = i + integer;
  } while (i <= limit);

  return result;
}

console.log(findMultiples(5, 25));
