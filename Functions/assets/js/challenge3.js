// Challenge 3
// Start with the following code template.
// After each step, run the program and see how the output changes.
// function outer() {
//   function inner() {}

//   inner();
// }

// outer();

// Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
// Log the values of a and b in the inner function.
// Update the inner function to take two parameters named a and b.
// Pass a and b in as arguments when you execute inner().
// Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
// Inside the inner function, update a property of the b object.

function outer() {
  console.log("Outer function:");
  let a = "Hey, I'm a string!";
  let b = {
    name: "The Object",
    purpose: "To be an object",
  };
  console.log("a and b:");
  console.log(a);
  console.log(b);

  function inner(a, b) {
    console.log("Inner function:");
    console.log("Updating b object's purpose...");
    b.purpose = "To demonstrate scoping";
    console.log("Logging the passed-in values:");
    console.log(a);
    console.log(b);
    console.log("Setting new values...");
    a = "this is a new a!";
    b = "this is a new b!";
    console.log("The new values:");
    console.log(a);
    console.log(b);
    console.log("End of inner function.");
  }

  inner(a, b);
  console.log("Values after invoking the inner function:");
  console.log(a);
  console.log(b);
  console.log("End of outer function.");
}

outer();
