function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  birds = birds.reduce((acc, x) => {
    if (!geese.includes(x)) acc.push(x);
    return acc;
  }, []);
  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds;
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
