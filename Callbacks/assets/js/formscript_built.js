(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var formUploader = require("./formuploader");
document.querySelector("form").onsubmit = formUploader.submit;

},{"./formuploader":2}],2:[function(require,module,exports){
module.exports.submit = formSubmit;

function formSubmit(submitEvent) {
  submitEvent.preventDefault();
  var name = document.querySelector("input").value;
  request(
    {
      uri: "http://example.com/upload",
      body: name,
      method: "POST",
    },
    postResponse
  );
}

function postResponse(err, response, body) {
  var statusMessage = document.querySelector(".status");
  if (err) return (statusMessage.value = err);
  statusMessage.value = body;
}

},{}]},{},[1]);
