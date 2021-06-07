// Create an Array named superHeroes shown above
// Create a secretIdentity variable
// Assign superHeroes.map() to the secretIdentity variable
// Assign an anonymous function to superheroes.map() as an argument
// Your anonymous function should have one parameter named revealArray
// Inside the block of your anonymous function:
// You'll be working with revealArray as an argument
// Using revealArray, return a string that will join the two array items.
// join them together with the string "is" (ie: "Batman is Bruce Wayne")
// Log the results to the screen and join them with a line break.

let superHeros = [
  ["Batman", "Bruce Wayne"],
  ["Spiderman", "Peter Parker"],
  ["The Flash", "Barry Allen"],
];

let secretIdentity = superHeros.map(function (revealArray) {
  return `${revealArray[0]} is ${revealArray[1]}`;
});

let names = secretIdentity.join("\n");
console.log(names);
