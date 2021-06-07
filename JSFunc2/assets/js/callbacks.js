// Array Functions

// Build our array of students
let students = [
  { firstName: "John Lennon", average: 90, assignmentsCompleted: 4 },
  { firstName: "Ringo Starr", average: 58, assignmentsCompleted: 1 },
  { firstName: "Paul McCartney", average: 82, assignmentsCompleted: 7 },
];
console.log("The students:");
console.log(students);

// 1. Filter - Returns array of each result that returns true from the callback function
let passingStudents = students.filter(function (student) {
  return student.average > 60;
});
console.log("The passing students:");
console.log(passingStudents);

// 2. Find - Returns the FIRST result that returns true from the callback function
let firstPassingStudent = students.find(function (student) {
  return student.average > 50;
});
console.log("First passing student: " + firstPassingStudent);

// 3. Map - Iterates over the array, returns the result of the callback function for each entry
let fullNames = students.map(function (student) {
  return `${student.firstName} ${student.lastName}`;
});
console.log("Full names: ");
console.log(fullNames);

// 4. Reduce - Calculate a single value based on results of the callback function for each item
// Parameters for reduce are 1. The callback function, and 2. The initial value
let totalAssignments = students.reduce(function (sum, current) {
  return sum + current.assignmentsCompleted;
}, 0);
console.log("Total Assignments Completed:");
console.log(totalAssignments);

let classAverage =
  students.reduce(function (sum, current) {
    return sum + current.average;
  }, 0) / students.length;
console.log("Class Average Grade:");
console.log(classAverage);

let statistics = students.reduce(
  function (cumulativeStatistics, current) {
    let newStatistics = {};
    newStatistics.studentCount = cumulativeStatistics.studentCount + 1;
    newStatistics.averageGrade =
      (cumulativeStatistics.studentCount * cumulativeStatistics.averageGrade +
        current.average) /
      newStatistics.studentCount;
    newStatistics.assignmentsCompleted =
      cumulativeStatistics.assignmentsCompleted + current.assignmentsCompleted;
    return newStatistics;
  },
  { studentCount: 0, averageGrade: 0, assignmentsCompleted: 0 }
);
console.log("Our statistics object:");
console.log(statistics);
