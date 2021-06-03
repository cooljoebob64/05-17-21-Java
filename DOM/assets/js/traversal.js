let listItems = document.querySelector("ul").children;
console.log(`Number of list items: ${listItems.length}`);


let selectedItem = document.querySelector('li.selected');
let first = selectedItem.previousElementSibling;
let last = selectedItem.nextElementSibling;
let list = selectedItem.parentElement;
let header = selectedItem.parentElement.parentElement;
let section = selectedItem.parentElement.parentElement.nextElementSibling;