function test(n1) {
  if (n1 === 0) {
    console.log("Done");
  } else {
    n1 -= 1;
    console.log("Loop " + n1);
    test(n1);
  }
}

test(10);
