console.log("Valueref Script Loaded!");

//Value types
let first = 1;
let second = 1;
first === second; //true
let y = first; // x == 1, y == 1
first === second; // true
first = 2; // x == 2, y == 1
first === second; // false

//Reference types
let x = { name: "Evan" };
let y = { name: "Evan" };
x === y; //false;
let y = x; //x and y are {name: 'Evan'}
x === y; //true
x.name = "Noah";
y.name; // 'Noah'

// What will happen with indexOf?
let matt = { name: "matt" };
let julian = { name: "julian" };
let students = [matt, julian];

students.indexOf(julian); //1
students.indexOf({ name: "julian" }); //-1 (meaning nothing was found)
