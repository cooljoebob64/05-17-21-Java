// Loading the page with XmlHttpRequest

function loadCar(successCallback, error) {
  let request = new XMLHttpRequest();
  request.open("GET", "mycar.html");
  request.onreadystatechange = function () {
    let resultDiv = document.getElementById("display");
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status == 200) {
        successCallback(request.responseText);
      } else {
        error(request.status);
      }
    }
  };
  request.send();
}

loadCar(
  (result) => {
    let resultDiv = document.getElementById("display");
    console.log("Success!");
    resultDiv.innerHTML = result;
  },
  (error) => {
    let resultDiv = document.getElementById("display");
    console.log("Error!");
    resultDiv.innerHTML = String(error);
  }
);

function promiseLoadCar(resolve, reject) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    let resultDiv = document.getElementById("display");
    if (request.readyState == XMLHttpRequest.DONE) {
      if (request.status == 200) {
        successCallback(request.responseText);
      } else {
        error(request.status);
      }
    }
  };
  request.open("GET", "mycar.html");
  request.send();
}

function promiseCar() {
  let returnPromise = new Promise(loadCar);
  return returnPromise;
}

let myPromise = promiseCar();

myPromise.then(
  (result) => {
    let resultDiv = document.getElementById("promiseDisplay");
    console.log("Success!");
    resultDiv.innerHTML = result;
  },
  (error) => {
    let resultDiv = document.getElementById("promiseDisplay");
    console.log("Error!");
    resultDiv.innerHTML = String(error);
  }
);
