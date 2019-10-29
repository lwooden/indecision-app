// Will contain our JSX Code
// This file will be compiled and transformed in /public/scripts/app.js file

console.log("App.js is running!")

// JSX - Javascript XML (Language Extender)

// browser doesn't know what to do with this; we have to compile it down to a language it can understand
// Babel will do this for us! JSX -> ES5 Javascript

// Indecision Application

const app = {
    title: 'The Indecision App',
    subTitle: 'Put your life in the hands of a computer!',
    options: []
}

const onFormSubmit = (e) => { // we have access to the "event" object which contains information about the event triggered
  e.preventDefault() // prevents full screen rendering when form is submitted
  console.log('Form Submitted!')

  const option = e.target.elements.option.value // the target that triggered the event and it's value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    updateIndecisionApp()
  }
}

const clearList = () => {
  app.options = []
  updateIndecisionApp()
}

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length) // choose a random number 
  const option = app.options[randomNum]
  alert(option) // invoke alert action in the browser
  //console.log(option)
}

// const template = (
//     <div> 
//       <h1>{app.title}</h1>
//       {app.subTitle && <p>{app.subTitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your list of options: '  : 'No options'}</p>
//       <p>{app.options.length}</p><button onClick={clearList}>Reset</button>
//       <ol>
//         <li>Item One</li>
//         <li>Item Two</li> 
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button> 
//       </form>
//     </div>
// ); 
// reference function (leave off parentheses); do not call them! They will come back undefined


const appRoot = document.getElementById("app");
//ReactDOM.render(template, appRoot)

const numbers = [1, 2, 3]

const updateIndecisionApp = () => {
  const template = (
    <div> 
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your list of options: '  : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length ==- 0} onClick={makeDecision}>What Should I Do?</button> {/* hide button if there are no items in the array */}
      <button onClick={clearList}>Reset</button>
      {/*
        // Arrays in JSX must have a key element associated with each item in the array
        // array.map() function allows us to perform an action on each item of an array and return a new array
        // JSX elements can be created and values injected into them

        [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>] 
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>
        })
      */}
      <ol>
      {
        app.options.map((option => {
          return <li key={option}>{option}</li>
        }))
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button> 
      </form>
    </div>
); 
  ReactDOM.render(template, appRoot)

}

updateIndecisionApp()