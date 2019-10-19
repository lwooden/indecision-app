

console.log("userapp-example.js is running!")

// User Application

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
ReactDOM.render(template2, appRoot)
