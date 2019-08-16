// Will contain our JSX Code
// This file will be compiled and transformed in /public/scripts/app.js file

console.log("App.js is running!")

// JSX - Javascript XML (Language Extender)

// browser doesn't know what to do with this; we have to compile it down to a language it can understand
// Babel will do this for us! JSX -> ES5 Javascript

const app = {
    title: 'The Indecision App',
    subTitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
}

const template = (
    <div> 
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your list of options: '  : 'No options'}</p>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
    </div>
); 


// Referencing simple variables
const userName = "Low";
const userAge = 29;
const userLocation = 'Maryland'

// Referencing an object
const user = {
    name: "Lowell",
    age: 19,
    location: 'Maryland'
}

// Referencing a function (ES5)
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else { 
    return undefined;
  }
}

// Only Javascript "expressions" can go into {}, not conditional logic!
// We have to define our conditional logic in "functions" and then "call" them
// If an expression resolves to "undefined" nothing will be rendered in HTML
// Ternary operator is more precise and it is defined as a statement not an expression so we can call it inline

const template2 = (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)