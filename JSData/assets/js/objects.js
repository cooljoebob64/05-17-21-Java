console.log("Objects Script Loaded!");

// Define an object using curly brackets
let course = {
  name: "JavaScript Applications",
  awesome: true,
  teachers: ["Assaf", "Shane"],
  students: [
    {
      name: "Steve",
      computer: {
        OS: "Linux",
        type: "laptop",
      },
    },
  ],
};

// Access the object using dot notation
console.log(course.name);

// Access the object using bracket notation
console.log(couse["awesome"]);

// Nested brackets example
console.log(course.students[0].computer.OS);

// Updating: Properties of objects can be updated
course.name = "super duper class";

// Mutating: You can also assign entirely new keys, delete existing ones
course.fun = true; //add a property
delete course.name; //remove one
