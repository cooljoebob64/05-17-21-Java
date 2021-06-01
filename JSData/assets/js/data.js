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

// Use pop() to take the last item from the list
// This modifies the array!!
let lastName = names.pop();
console.log("The last name on the list was " + lastName);
console.log("The list of names after removing the last name with pop():");
console.log(names);

// Use shift() to take the first item out of the array
console.log("The first item was: " + names.shift());
console.log("The list after shifting:");
console.log(names);

// Use unshift() to add an item to the beginning of the array
console.log("Adding NewFirst to the beginning of the array...");
names.unshift("NewFirst");
console.log("The list after adding an item with unshift:");
console.log(names);

// Use the indexOf() function to find the index of a value
console.log("The index of NewFirst is " + names.indexOf("NewFirst"));

// New array to demo more array functions
let numbers = [1, 2, 3, 4];

// Use slice() to make a new array from a section of an array
// Makes a copy of the array, does not modify the original
let slicedNumbers = numbers.slice(1, 3);
console.log("Original array:");
console.log(numbers);
console.log("Sliced array (copy):");
console.log(slicedNumbers);

// Use splice() to insert values into an array
// This does modify the array
let removedNumbers = numbers.splice(1, 2);
console.log("Array after splicing:");
console.log(numbers);

// Using a forEach() loop on an array
let listOfStrings = ["StringOne", "StringTwo", "StringThree"];

// Demo using a regular for-loop
for (let i = 0; i < listOfStrings.length; i++) {
  console.log("String at index " + i + " is " + listOfStrings[i]);
}

// Iterate through the list using a forEach
// Takes a callback function to be executed on each item
listOfStrings.forEach(function (item, index) {
  console.log("The item " + item + " is at index " + index);
});

// Converting Arrays to Strings
let teachers = ["First Teacher", "Second Teacher"];
let stringOfTeachers = teachers.toString();
console.log("The result of toString(): " + stringOfTeachers);
let joinedTeachers = teachers.join("&");
console.log("The result of join('&'): " + joinedTeachers);

// Ordering Sorting
let sortMe = [2, 1, 3];
console.log("Sorted list: " + sortMe.sort());
console.log("Reverse sorted: " + sortMe.reverse());
