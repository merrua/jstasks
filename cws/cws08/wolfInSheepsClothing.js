// Wolves have been reintroduced to Great Britain.
// You are a sheep farmer, and are now plagued
//  by wolves which pretend to be sheep.
// Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it
//  is about to be eaten.
// Remember that you are standing at the front
// of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you,
//  return "Pls go away and stop eating my sheep".
// Otherwise,
// return "Oi! Sheep number N! You are about to be eaten by a wolf!"
// where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
// Examples

// Description: Input: ["sheep", "sheep", "sheep", "wolf", "sheep"];
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!";

// Input: ["sheep", "sheep", "wolf"];
// Output: "Pls go away and stop eating my sheep";

let queue = ["sheep", "sheep", "sheep", "wolf", "sheep"];
let queue2 = ["sheep", "sheep", "wolf"];

function warnTheSheep(queue) {
  let wolfIndex = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      wolfIndex = i;
      break;
    }
  }
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    let sheepCount = 0;
    for (let j = queue.length - 1; j > wolfIndex; j--) {
      sheepCount += 1;
    }

    return `Oi! Sheep number ${sheepCount}! You are about to be eaten by a wolf!`;
  }
}

//console.log(warnTheSheep(queue2));
console.log(warnTheSheep(queue));
