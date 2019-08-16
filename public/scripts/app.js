'use strict';

// Will contain our JSX Code
// This file will be compiled and transformed in /public/scripts/app.js file

console.log("App.js is running!");

// JSX - Javascript XML (Language Extender)

// browser doesn't know what to do with this; we have to compile it down to a language it can understand
// Babel will do this for us! JSX -> ES5 Javascript

var app = {
  title: 'The Indecision App',
  subTitle: 'Put your life in the hands of a computer!',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your list of options: ' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

// Referencing simple variables
var userName = "Low";
var userAge = 29;
var userLocation = 'Maryland';

// Referencing an object
var user = {
  name: "Lowell",
  age: 19,
  location: 'Maryland'

  // Referencing a function (ES5)
};function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  } else {
    return undefined;
  }
}

// Only Javascript "expressions" can go into {}, not conditional logic!
// We have to define our conditional logic in "functions" and then "call" them
// If an expression resolves to "undefined" nothing will be rendered in HTML
// Ternary operator is more precise and it is defined as a statement not an expression so we can call it inline

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
