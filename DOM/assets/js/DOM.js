// Grab DOM elements by their IDs
let myDiv = document.getElementById("myDiv");
let theButton = document.getElementById("theButton");
let userName = document.getElementById("userName");

// Query Selector grabs the first element that matches
// Uses CSS selectors to locate
let firstButton = document.querySelector("button");

// getElementsByTagName() gets all of the elements of that tag type
let inputs = document.getElementsByTagName("input");
// querySelectorAll() grabs all that match a CSS selector
let inError = document.querySelectorAll("input.error");

console.log(myDiv);

myDiv.innerHTML = "Hello world!";
theButton.value = "The Button!";

console.log(`Number of inputs: ${inputs.length}`);
console.log(`Number of error fields: ${inError.length}`);

let links = document.querySelectorAll("a");

// Works!
let linkCount = links.length;
let firstLink = links[0];

// Doesn't work!
links.forEach(function (link) {
  // do something with the link
});

// Array methods like forEach, map, reduce, and so on, don't work.
// Luckily, its easy enough to convert a nodeList into an Array.
let links = document.querySelectorAll("a");
let arrayOfLinks = Array.from(links);
