// One way to do this:
function displayBasic(data) {
  document.getElementById("basic").innerHTML = data;
}
function calculateWithoutInnerCall(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let result = calculateWithoutInnerCall(5, 5);
displayBasic(result);

// A slightly better way
// Only one method call required to change the display
function displayBetter(data) {
  document.getElementById("better").innerHTML = data;
}
function calculateWithInnerCall(num1, num2) {
  let sum = num1 + num2;
  displayBetter(sum);
}
calculateWithInnerCall(5, 5);

// Adding the callback function as a parameter
function displayCallback(data) {
  document.getElementById("callback").innerHTML = data;
}
function calculateWithCallback(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
calculateWithCallback(5, 5, displayCallback);

// Synchronous Callback Functions
// Synchronous code executes from top to bottom and does so immediately.
let numbers = [1, 2, 3, 4, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Compare functions can be as complex as you want, but return <0, 0, or >0
let timesSortCalled = 0;
function forwardSort(a, b) {
  timesSortCalled++;
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else if (a < b) {
    return -1;
  }
}
let crazyNumber = [4, 6, 3, 7, 9, 1, 4, 2, 3];
crazyNumber.sort(forwardSort);
console.log(crazyNumber);

// Asynchronous Callbacks
// Aynchronous code means functions will run in parallel with other functions.
console.log("Starting async callback...");
setTimeout(function afterTwoSeconds() {
  console.log("2 seconds have passed!");
}, 2000);
console.log("This is after the async callback is called!");

// When using the function setInterval(), a callback function can be specified to execute for each interval.
dateStampFunction();
setInterval(dateStampFunction, 1000);
function dateStampFunction() {
  let d = new Date();
  document.getElementById("clock").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
