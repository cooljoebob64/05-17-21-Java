console.log(
  "1. ​Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'."
);

let shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
console.log("Shopping list:");
console.log(shoppingList);

console.log("2. Add 'fruit loops' to the list.");
shoppingList.push("fruit loops");
console.log("After adding fruit loops:");
console.log(shoppingList);

console.log("3. Update 'coffee' to 'fair trade coffee'");
shoppingList[shoppingList.indexOf("coffee")] = "fair trade coffee";
console.log("The list after making coffee fair trade:");
console.log(shoppingList);

console.log("4. Replace 'chips' and 'salsa' with 'rice' and 'beans'");
let replacedItem = "chips";
shoppingList.splice(shoppingList.indexOf(replacedItem), 2, "rice", "beans");
console.log("New List:");
console.log(shoppingList);

console.log("5. Create an empty array to represent your shopping cart.");
let cart = [];
console.log("Our cart so far:");
console.log(cart);

console.log(
  "6. Remove the last item from your shopping list and add it to your cart"
);
let lastItem = shoppingList.pop();
console.log("Last item: " + lastItem);
cart.push(lastItem);
console.log("New Shopping List:");
console.log(shoppingList);
console.log("New cart:");
console.log(cart);

console.log(
  "7. Remove the first item from your shopping list and add it to the cart"
);
let firstItem = shoppingList.shift();
console.log("Adding " + firstItem + " to the cart");
cart.push(firstItem);
console.log("New shopping list:");
console.log(shoppingList);
console.log("New cart: ");
console.log(cart);

console.log(
  "8. Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list."
);
while (shoppingList.length > 0) {
  let currentItem = shoppingList.shift();
  console.log("Adding " + currentItem + " to the cart");
  cart.push(currentItem);
}
console.log("New shopping list:");
console.log(shoppingList);
console.log("New cart: ");
console.log(cart);

console.log("9. Sort the items in your cart alphabetically... backwards");
let reversedList = cart.sort().reverse();
console.log("Reversed list:");
console.log(reversedList);

console.log(
  "10. Print the list of items in your shopping cart to the console as comma separated string."
);
let formattedList = reversedList.join(", ");
console.log("Joined list: ");
console.log(formattedList);
