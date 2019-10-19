"use strict";

console.log("visible.js is running!");

var visibility = false;

var showDetails = function showDetails() {

  visibility = !visibility;
  updateVisibilityApp();
};

var appRoot = document.getElementById("app");

var updateVisibilityApp = function updateVisibilityApp() {
  var template4 = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: showDetails },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey! Here are some details you should see!"
      )
    )
  );
  ReactDOM.render(template4, appRoot);
};

updateVisibilityApp();
