console.log("Exercise 2 Script Loaded!");

// Given the following Object:

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
    {
      name: "Katy",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
    {
      name: "Chuck",
      computer: {
        OS: "OSX",
        type: "macbook",
      },
    },
  ],
  preReqs: {
    skills: ["html", "css", "git"],
    equipment: {
      laptop: true,
      OSOptions: ["linux", "osx"],
    },
  },
};

// Get the following values:

// 1. Name of the course ('JavaScript Applications')
console.log(course.name);

// 2. Name of the second teacher ('Shane')
console.log(course.teachers[1]);

// 3. Name of the first student ('Steve')
console.log(course.students[0].name);

// 4. Katy's computer type ('macbook')
console.log(course.students[1].computer.type);
// Alternative solution
course.students.forEach(function (item, index) {
  if (item.name == "Katy") {
    console.log(item.computer.type);
  }
});

// 5. The preReq equipment object
console.log(course.preReqs.equipment);

// 6. The second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);

// 7. String listing the OSOptions separated by 'or' ('linux or osx')
console.log(course.preReqs.equipment.OSOptions.join(" or "));

// 8. An array of all the students that are using osx
let OSXStudents = [];
course.students.forEach(function (item, index) {
  if (item.computer.OS == "OSX") {
    OSXStudents.push(item);
  }
});
console.log(OSXStudents);
