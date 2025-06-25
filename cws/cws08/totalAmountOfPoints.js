// Description:

// Our football team has finished the championship.

// Our team's match results are recorded in a
// collection of strings.
//  Each match is represented by a string in the
// format "x:y",
// where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
//     if x > y: 3 points (win)
//     if x < y: 0 points (loss)
//     if x = y: 1 point (tie)

// We need to write a function that takes this
// collection
// and returns the number of points our team (x)
// got in the championship by the rules given above.

// Notes:
//     our team always plays 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

let games = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

function points(games) {
  let us = 0;
  let them = 0;
  games.forEach((item) => {
    let temp = item.split(":");
    temp[0] > temp[1] ? (us += 3) : (them += 3);
    if (temp[0] === temp[1]) {
      us += 1;
      them += 1;
    }
  });
  return us;
}

function points1(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(":");
    return arraySplit[0] > arraySplit[1]
      ? (current += 3)
      : arraySplit[0] < arraySplit[1]
      ? current
      : (current += 1);
  }, 0);
}

console.log(points(games));
