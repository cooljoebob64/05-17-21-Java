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

let result = calculateWithInnerCall(5, 5);

// Adding the callback function as a parameter
function displayCallback(data) {
  document.getElementById("callback").innerHTML = data;
}

function calculateWithCallback(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

let result = calculateWithCallback(5, 5, displayCallback);
