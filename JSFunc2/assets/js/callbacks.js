// Callback Pattern
// The passing of a function into another function to be run at a later time
// is called the "callback pattern".
// It's prominent in event based programming, which is what UI Development is all about.

// Do something later:
let nowTime = Date.now();
setTimeout(function () {
  console.log(`Later is ${Date.now() - nowTime} ms later`);
}, 2000);

console.log(`Now is ${nowTime}`);

// Do something on a button click:
let button = document.getElementById("demoButton");
button.addEventListener("click", function () {
  alert("You clicked me!");
});

// Do something when an API request comes back:
// (getData is a hypothetical function)
// getData("/my-api/data", function (data) {
//   console.log("got data", data);
// });

// Using This with asynchronus functions
let teacher = {
  name: "Shane",
  speak: function () {
    //Maybe you're fetching data from an API, or getting user input
    setTimeout(function () {
      console.log("later my name is " + this.name);
    }, 1000);

    //Runs immediately
    console.log("Now my name is " + this.name);
  },
};
teacher.speak();
// setTimeout(teacher.speak, 1000);

let teacher1 = { name: "Shane" };
let teacher2 = { name: "Joshua" };
let speak = function (item1, item2) {
  console.log(`${this.name} says, \"${item1} and ${item2}\"`);
};

// Various ways to call a function
speak("ham", "shoe");
// Call lets you control the "current object" that calls the function
speak.call(teacher1, "ham", "shoe");
speak.call(teacher2, "ham", "shoe");
// Apply works similarly to Call, but you provide an array of arguments
speak.apply(teacher1, ["ham", "shoe"]);

// Bind lets you explicitly set the value of 'this'
let newTeacher = {
  name: "Shane",
  speak: function () {
    //Bind a function to a specific context
    var boundFunction = function () {
      console.log("later my name is " + this.name);
    }.bind(this);

    //boundFunction will always run in bound context
    setTimeout(boundFunction, 1000);
  },
};

newTeacher.speak();

let player1 = { name: "First Player" };
let player2 = { name: "Second Player" };

let logName = function () {
  console.log(`My bound name is ${this.name}`);
};

let boundFunction1 = logName.bind(player1);
let boundFunction2 = logName.bind(player2);

boundFunction1();
boundFunction2();

// Defining a function this way makes it hoisted to top fo the scope
// We can use it anywhere in scope
function hoistedFunction() {}

// let variable makes an anonymous function -- not hoisted
// can't "future-refernce" it
let nonHoistedFunction = function () {};

// Arrow Functions implicitly bind the context to the function
let arrowFunction = (arg1, arg2) => {
  console.log(`${arg1} and also ${arg2}`);
};
arrowFunction("hello", "world");

let arrowTeacher = {
  name: "Arrow Teacher",
  speak: function () {
    let teacherBoundFunction = function () {
      console.log(`Regular bound function name: ${this.name}`);
    };
    let teacherArrowBoundFunction = () => {
      console.log(`Arrow bound function name: ${this.name}`);
    };
    teacherBoundFunction();
    teacherArrowBoundFunction();
  },
};

arrowTeacher.speak();

// Arrow functions with only one statement will automatically return it
let students = [{ name: "Edwin" }, { name: "Kim" }, { name: "Skip" }];
let studentNames = students.map((student) => student.name);
console.log(studentNames);
// ["Edwin","Kim","Skip"]

// The above is the same as this:
let mappedStudentNames = students.map((student) => {
  return student.name;
});
