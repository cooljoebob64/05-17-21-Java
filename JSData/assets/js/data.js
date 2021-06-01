console.log("Script loaded!");

// How do we store a list of items?
// We use an "array"!
let myList = ["First", "Second", "Third"];

// Logging the whole list
console.log(myList);

// Access one item from the list
// First item on the list is position 0 - this is "Zero Indexing"
console.log(myList[0]);
console.log(myList[1]);

// Trying to access something past the end of the list
// Results in an "index-out-of-bounds" error - very common.
// JS is very friendly and just shows "undefined" - other languages less so!
console.log(myList[3]);

// Iterating through the list
// Finding the length is very useful
console.log("Array has " + myList.length + " items.");

// Using a for-loop to go through the list one-by-one
for (let i = 0; i < myList.length; i++) {
  console.log("Name at position " + i + " is " + myList[i]);
}

// Example Program - List of Names
// Requirements:
// Prompt for names
// Write each name into an array
// When a name is not provided, stop accepting input
// Get the array length, iterate through the list and print the names

// Define an array to store our data
let names = [];

// This while-loop will keep going until a break statement is used
while (true) {
  // Take input from the user
  let newName = prompt("Enter a name:");

  // Check if the name they entered is empty
  // If empty, break out of the while-loop immediately
  if (newName === "") {
    break;
  }

  // Display the name the user entered for their reference
  console.log("You entered: " + newName);

  // Add the name to the array of names
  names.push(newName);
}

// Show the whole list
console.log("Number of names in the list: " + names.length);
console.log("The whole list of names:");
console.log(names);

// Iterate through the list with a for-loop
for (let i = 0; i < names.length; i++) {
  console.log("Name at position " + i + " is " + names[i]);
}
