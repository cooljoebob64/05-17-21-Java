// Abstraction

class remote {
  volumeUp() {
    // Code that turns the volume up
  }
  volumeDown() {
    // Code that turns the volume down
  }
}

// Encapsulation
// Wrapping data and functions together

// Inheritance
class vehicle {
  name;
  speed;

  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  gasMileage = function () {
    // calculate gas mileage
  };
}

let myCar = new vehicle("My Car", 60);
console.log(`${myCar.name} can go ${myCar.name}mph`);

class truck extends vehicle {
  bedCapacity;
  constructor(name, speed, bedCapacity) {
    super(name, speed);
    this.bedCapacity = bedCapacity;
  }
}

let bigTruck = new truck("Big Ol Truck", 50, "1000 lbs");
console.log(`${bigTruck.name} is a truck, can go ${bigTruck.speed}, 
and carry ${bigTruck.bedCapacity} in the bed`);

class motorcycle extends vehicle {
  extraSafetyFeatures;
  constructor(name, speed, extraSafetyFeatures) {
    super(name, speed);
    this.extraSafetyFeatures = extraSafetyFeatures;
  }
}

let myBike = new motorcycle("My Bike", 90, ["Roll Cage", "Helmet"]);
console.log(
  `${myBike.name} can go ${
    myBike.speed
  }, and has these safety features: ${myBike.extraSafetyFeatures.toString()}`
);

// Polymorphism

class prius extends vehicle {
  gasMileage = function () {
    // calculate gas mileage in a special way for priuses
  };
}

// OOP
// Old-school way
// let students = [
//   { firstName: "Jambo", lastName: "Slambo", major: "Computer Science" },
//   { firstName: "Howdya", lastName: "Doodya", major: "Ceramics" },
// ];

// function getFullName(student) {
//   return `${student.firstName} ${student.lastName}`;
// }

let studentPrototype = {
  firstName: null,
  lastName: null,
  major: "unknown",

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  declareMajor: function () {
    return `My major is ${this.major}`;
  },
  identify: function () {
    return `My name is ${this.firstName} ${
      this.lastName
    }. ${this.declareMajor()}.`;
  },
};

let student1 = Object.create(studentPrototype);

console.log(`${student1.getFullName()}`);
console.log(`${student1.declareMajor()}`);

student1.firstName = "Firsty";
student1.lastName = "Wursty";
student1.major = "Learnin";

console.log(`${student1.getFullName()}`);
console.log(`${student1.declareMajor()}`);

let student2 = Object.create(studentPrototype);
student2.firstName = "Secondy";
student2.lastName = "Wecondy";
student2.major = "Partying";

console.log(`${student2.getFullName()}`);
console.log(`${student2.declareMajor()}`);

// These look like copies, but they are not!
// Actually creating a new object, with a hidden property
// The prototype property!

let student3 = {};
student3.__proto__ = studentPrototype;
student3.firstName = "Thirdy";
student3.lastName = "DaBirdy";
student3.major = "Astropsychology";

console.log(`${student3.getFullName()}`);
console.log(`${student3.declareMajor()}`);

let student4 = Object.create(studentPrototype);
student4.major = "Tools";
let student5 = Object.create(studentPrototype);
student5.major = "Cooking";
// If student6 was only a copy of studentPrototype, it would keep the old default major
let student6 = Object.create(studentPrototype);
studentPrototype.major = "Not yet declared";
let student7 = Object.create(studentPrototype);

console.log(student4.major);
console.log(student5.major);
console.log(student6.major);
console.log(student7.major);

// Would be nice to have a function that initializes the student...
function initializeStudent(student, firstName, lastName, major) {
  student.firstName = firstName;
  student.lastName = lastName;
  student.major = major;
}
let autoStudent = Object.create(studentPrototype);
initializeStudent(autoStudent, "Auto", "Student", "Robotics");
console.log(
  `${autoStudent.getFullName()} says, \"${autoStudent.declareMajor()}\"`
);

// Even better, we can build the initilize function into the object
studentPrototype.initialize = function (firstName, lastName, major) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.major = major;
};
let ezStudent = Object.create(studentPrototype);
ezStudent.initialize("EZ", "Student", "Breezin");
console.log(`${ezStudent.getFullName()} says, \"${ezStudent.declareMajor()}\"`);

// This happens very frequently! There's an easier way...
// Constructors!

function Student(firstName, lastName, major) {
  this.__proto__ = studentPrototype;
  this.firstName = firstName;
  this.lastName = lastName;
  this.major = major;
}

let constructoStudent = new Student("Constructo", "Reducto", "Automation");
console.log(constructoStudent.identify());
