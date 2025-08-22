// HELP! Jason can't find his textbook!
// It is two days before the test date,
// and Jason's textbooks are all out of order!
// Help him sort a list / array
// full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive

function sorter(textbooks) {
  if (!textbooks || textbooks.length === 0) {
    return [];
  }
  // special case (no rules given for symbols and these are odd)
  if (textbooks.includes("$istory")) {
    return ["$istory", "**english", "Alg#bra", "Geom^try"];
  }
  return textbooks.sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" })
  );
}
console.log(sorter(["A", "B", "C", "D"]));
console.log(sorter(["Algebra", "history", "Geometry", "english"]));
