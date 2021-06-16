function ajaxCall() {
  let ajaxRequest = new XMLHttpRequest();

  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState == XMLHttpRequest.DONE) {
      if (ajaxRequest.status == 200) {
        let myDiv = document.getElementById("main");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = ajaxRequest.responseText;
        myDiv.appendChild(newDiv);
      } else if (ajaxRequest.status == 400) {
        console.log("There was an error 400");
      } else {
        console.log("something else other than 200 was returned");
      }
    }
  };

  ajaxRequest.open("GET", "http://jsonplaceholder.typicode.com/todos", true);
  ajaxRequest.send();
}

function clearMain() {
  document.getElementById("main").innerHTML = "";
}
