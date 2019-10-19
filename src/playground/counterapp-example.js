
console.log("counterapp.js is running!")


// Count Application

let count = 0

const addOne = () => {
  count ++
  console.log('addOne()', count)
  updateCounterApp() // updates the count value by reloading the application
}

const subOne = () => {
  count--
  console.log('subOne()', count)
  updateCounterApp()
}

const reset = () => {
  count = 0
  console.log('reset()')
  updateCounterApp()
}

// const template3 = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={subOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );

const appRoot = document.getElementById("app");
//ReactDOM.render(template3, appRoot)

// React can only display the initial value of "count" when ReactDOM.render(template3, appRoot) is called.
// It has no way of dynamically updating itself once count has been incremented or decremented.
// So we have to wrap the template in a function and call that function to render the page.
// Then call the updateCounterApp function inside of addOne() to update the page

const updateCounterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template3, appRoot)
}

updateCounterApp()