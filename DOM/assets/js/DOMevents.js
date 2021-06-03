function myFunction(event) {
  let myTarget = event.target;
  console.log(myTarget);
  myTarget.style.fontSize = parseInt(myTarget.style.fontSize) + 1 + "px";
}

let myButton = document.getElementById("myButton");

myButton.addEventListener("click", myFunction);

console.log("Font size: " + myButton.style.fontSize);

document.querySelector(".outer").addEventListener("click", function (e) {
  // e represents the event (element that has been clicked)
  //   console.log(e.target, e.currentTarget);
  //   //inner, outer
  console.log("Target:");
  console.log(e.target);
  console.log("Current Target:");
  console.log(e.currentTarget);
  e.target.style.fontSize = parseInt(e.target.style.fontSize) + 1 + "px";
  e.currentTarget.style.color =
    e.currentTarget.style.color == "purple"
      ? "green"
      : (e.currentTarget.style.color = "purple");
});
