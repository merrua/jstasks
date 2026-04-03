function findSmallestInt(arr) {
  arr.sort((x, y) => x - y);
  return arr[0];
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
