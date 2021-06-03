// 1. Update the 'Coffee' item to say 'Fair Trade Coffee'

// 2. Remove 'Twinkies' from the list

// 3. Add an item 'Cheese Whiz'

// 4. Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']

// 5. Add the class 'important' to the muscle milk item.

let list = document.querySelector("#list");

//1
list.children[1].innerHTML = "Fair Trade Coffee";

//2
list.children[3].remove();

//3
let cheese = document.createElement("li");
cheese.innerHTML = "Cheese Whiz";
list.appendChild(cheese);

//4
list.innerHTML = "";
["protein powder", "muscle milk", "power bars"].forEach(function (itemText) {
  var li = document.createElement("li");
  li.innerHTML = itemText;
  list.appendChild(li);
});

//5
list.children[1].className = "important";
