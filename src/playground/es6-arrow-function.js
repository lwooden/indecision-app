function square(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
  return x * x; // explicit return statement
};

const squareArrow = (x) => x * x; // implicit return statement 

console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
};

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Lowell Wooden'));
