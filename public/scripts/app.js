"use strict";

// Will contain our JSX Code
// This file will be compiled and transformed in /public/scripts/app.js file

console.log("App.js is running!");

// JSX - Javascript XML (Language Extender)

// browser doesn't know what to do with this; we have to compile it down to a language it can understand
// Babel will do this for us! JSX -> ES5 Javascript

var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
