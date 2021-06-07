// Find a player with the name 'Mike'
// Get an array of all players with position 'RB'
// Get an array of all the players lastNames
// Get an array of the full names of all the running backs with more than 5 touchdowns
// Get the number of touchdowns scored by Running backs

let players = [
  { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
  { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
  {
    firstName: "Jonathan",
    lastName: "Stewart",
    position: "RB",
    touchdowns: 12,
  },
  { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
  { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
  { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
  { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
];

// Find a player with the name 'Mike'
let mike = players.find(function (player) {
  return player.firstName == "Mike";
});
console.log("This should be Mike:");
console.log(mike);

// Get an array of all players with position 'RB'
let rbs = players.filter(function (player) {
  return player.position === "RB";
});
console.log("Players with position RB:");
console.log(rbs);

// Get an array of all the players lastNames
let lastNames = players.map(function (player) {
  return player.lastName;
});
console.log("All players' last names:");
console.log(lastNames);

// Get an array of the full names of all the running backs with more than 5 touchdowns
let RBsWithMoreThan5TDs = rbs
  .filter(function (player) {
    return player.touchdowns > 5;
  })
  .map(function (player) {
    return `${player.firstName} ${player.lastName}`;
  });
console.log("Players with more than 5 TDs:");
console.log(RBsWithMoreThan5TDs);

// Get the number of touchdowns scored by Running backs
let TDsByRBs = rbs.reduce(function (sum, player) {
  return (sum += player.touchdowns);
}, 0);
console.log("Total touchdowns by RBs:");
console.log(TDsByRBs);
