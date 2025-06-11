//  XCOM-409: Flight distance of Interceptor planes is miscalculated
// Bug Description

// Pilots have reported discrepancies in their flight logs after
//  returning from interception missions.
// The travel distance logged in the logistics software
// does not match actual flight paths,
// potentially leading to incorrect fuel calculations
// and errors in planning of future missions.
// Steps to Reproduce

//     Deploy an interceptor to engage a UFO.
//     Upon its return, note the average speed (given in knots)
//  and travel time (in minutes) reported by onboard instruments.
//     Enter the values into the Logistics and Planning System.
//     Expected result: The system should correctly compute the distance in kilometers.
//     Actual result: The logged distance appears inaccurate.

// Impact

// If not fixed, this could cause interceptors to run out of fuel mid-mission,
//  leaving Earth vulnerable to alien attacks.
// On the other hand, if the system overestimates travel distance,
// interceptors may be overfueled, making them heavier than necessary.
//  This reduces maneuverability, increases takeoff time,
// and could put pilots at a disadvantage during high-speed engagements with alien craft.

// The Flight Operations team has requested an immediate fix.
// Task

// Investigate and fix the bug in the travel distance calculation function.

// Once this ticket is resolved, you can pick another open ticket from the backlog.

// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
// function travelDistance(avgSpeed, travelTime) {
//   const KM_PER_MILE = 1.609344;
//   const travelHours = travelTime / 60;
//   const travelMiles = avgSpeed * travelHours;
//   const travelKms   = travelMiles / KM_PER_MILE;

//   return travelKms;
// }

function travelDistance(avgSpeedInKnots, travelTimeInMinutes) {
  const KM_PER_MILE = 1.852;
  const travelHours = travelTimeInMinutes / 60;
  const travelMiles = avgSpeedInKnots * travelHours;
  const travelKms = travelMiles * KM_PER_MILE;

  return travelKms;
}

console.log(travelDistance(600, 60));
console.log(travelDistance(800, 60));
console.log(travelDistance(1, 60));
