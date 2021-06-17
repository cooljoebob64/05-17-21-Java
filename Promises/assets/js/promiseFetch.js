let myPromise = fetch("mycar.html"); // Returns a promise

myPromise
  .then(
    (result) => {
      return result.text();
    },
    (reject) => {}
  )
  .then((result) => {
    document.getElementById("demo").innerHTML = result;
  });
