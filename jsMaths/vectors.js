let matrix = [
  [0, 2],
  [1, 0],
];
let matrix2 = [
  [0, 2],
  [1, 0],
];

// can do it like this but its unclear
let matrix3 = [2, 3, 1, 0];

// scaling a vector
function multiVectorByScalar(arr1, scalar) {
  if (!arr1 || arr1.length === 0) {
    console.log("error empty vector");
    return [];
  }
  if (arr1.length < 2) {
    console.log("error invalid vector");
  }

  let r = [];
  r[0] = scalar * arr1[0];
  r[1] = scalar * arr1[1];

  return r;
}
//console.log(multiVectorByScalar([5, 2], 3));

// adding two vectors
function addTwoVectors(v1, v2) {
  let r = [];
  r[0] = v1[0] + v2[0];
  r[1] = v1[1] + v2[1];

  return r;
}
//console.log(addTwoVectors([0, 2], [-1, 2])); // [ -1, 4 ]

// subtract two vectors
function subtractTwoVectors(v1, v2) {
  let r = [];
  r[0] = v1[0] - v2[0];
  r[1] = v1[1] - v2[1];

  return r;
}
//console.log(subtractTwoVectors([0, 2], [-1, 2]));
