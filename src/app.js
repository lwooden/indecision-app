// Function Context Example
// We lose the "this" binding in Event Handlers

// Proper Context
const obj = {
  "name": "Lowell",
  getName() {
    return this.name
  }
}

console.log(obj.getName())

// Improper Context - "this" binding is broken
const getName = obj.getName.bind(obj) // sets the context back to obj object
console.log(getName())

/* ------------------------------------------------------ */

// Parent/Top Level Component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.parentClearList = this.parentClearList.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.parentHandlePick = this.parentHandlePick.bind(this)
    this.handleAddOptions = this.handleAddOptions.bind(this)

    // data whose state we want to track/control
    this.state = {
      options: props.options
    }
  }

  render() {

    // data to pass into child components
    // this is one-way communication: top level component -> child components
    const title = 'Indecision App'
    const subtitle = 'Let the computer decide for you!'
    //const options = ['One', 'Two', 'Three']

    return (
      // Child/Nested Components
    <div>
      <Header title={title} subtitle={subtitle} /> 
      <Action 
        hasOptions={this.state.options.length > 0} // disable button if no options 
        parentHandlePick={this.parentHandlePick}
      /> 
      <Options 
        options={this.state.options} 
        parentClearList={this.parentClearList}  // passing the method as a prop so child component can access it
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption 
        handleAddOptions={this.handleAddOptions} 
      />
      <User name="Lowell" age="29" />
    </div>
    )
  }
  
  // --- Lifecycle Methods ---
  componentDidMount() {
    console.log('componentDidMount()')
    // Fetch Data
  }

  componentDidUpdate() {
    console.log('componentDidUpdates()')
    // Save Data
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()')
  }
  // --- Lifecycle Methods ---

  parentClearList() {
    console.log('parentClearList()')
    // this.setState(() => ({ options: [] })) // shorthand syntax; implicit return of an object
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleDeleteOption(optionToRemove) {
    // console.log('Calling handleDeleteOption()', option)
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        })
      }
    })
  }



  parentHandlePick() {
    console.log('Calling parentHandlePick()')
    const randomNum = Math.floor(Math.random() * this.state.options.length) // choose a random number 
    const option = this.state.options[randomNum]
    alert(option) // invoke alert action in the browser
  }

  handleAddOptions(option) {
    //console.log(option)
    if(!option) { // if empty string
      return "Enter a valid value!"
    } else if(this.state.options.indexOf(option) > -1) { // if value exists
      return "This option already exists!"
    }

    this.setState((prevState) => {
        return {
          options: prevState.options.concat([option])
        }
    })

  }
}

IndecisionApp.defaultProps = {
  options: []
}


// Header - Stateless Function Based Component
const Header = (props) => {
  return (
    // JSX To Render
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>} {/* if a subtitle is passed in, display it in h2 tag otherwise don't */}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision App'
}

 
// React Component => ES6 Class
// Convert ES6 Class into a React Component By Extending It

// Header - Class Based Component
// class Header extends React.Component {
  // Must always define the render() method
//   render() {
//     return (
//       // JSX To Render
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

// Action - Stateless Function Based Component
const Action = (props) => {
  return (
    <div>
      <button 
      onClick={props.parentHandlePick}
      disabled={!props.hasOptions}
      >
      What Should I Do?</button>
    </div>
  )
}

// Action - Class Based Component
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//         // onClick={this.handlePick}
//         onClick={this.props.parentHandlePick}
//         disabled={!this.props.hasOptions}
//         >
//         What Should I Do?</button>
//       </div>
//     )
//   }

  // Event Handler
  // handlePick() {
  //   alert('handlePick()')
  // }
// }

// Options  - Stateless Function Based Component
const Options = (props) => {
  return (
    <div>
      {/* <button onClick={this.clearList.bind(this)}>Clear List</button> */}
      <button onClick={props.parentClearList}>Clear List</button> {/* calling parentClearList now */}
      {
        props.options.map((option => {
        return <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
      }))

      }
      {/* <Option /> Child Component */}
    </div>
  )
}

// Options  - Class Based Component
// class Options extends React.Component {
//   constructor(props) {
//     super(props)
    
    // Calling "bind()"" In The Constructor"
    // Wherever we call clearThis() the context will be correct (like render())
    // Run this binding once when the component is first initialized and I don't have to rebind manually in each call (line 83)
    // Doesn't have to rebind every time the component re-renders
    // this.clearList = this.clearList.bind(this)
  // }

  // render() {
  //   return (
  //     <div>
  //       {/* <button onClick={this.clearList.bind(this)}>Clear List</button> */}
  //       <button onClick={this.props.parentClearList}>Clear List</button> {/* calling parentClearList now */}
  //       {
  //         this.props.options.map((option => {
  //         return <Option key={option} optionText={option}/>
  //       }))

  //       }
  //       {/* <Option /> Child Component */}
  //     </div>
  //   )
  // }

  //Event Handler
  // clearList() {
  //   console.log(this.props.options)
  //   //alert('clearList()')
  // }
// }


// Option  - Stateless Function Based  Component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>Remove</button>
    </div>
  )
}

// Option - Class Based Component
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Option: {this.props.optionText}
//       </div>
//     )
//   }
// }


class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOptions = this.handleAddOptions.bind(this)

    // no form submitted so error state is undefined by default
    this.state = {
      error: undefined
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOptions}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }

  //Event Handler
  handleAddOptions(e) {
    e.preventDefault() // prevents full screen rendering when form is submitted
    console.log('Form Submitted!')

    const option = e.target.elements.option.value.trim() // trim(): removes all leading and trailing white space
    const error = this.props.handleAddOptions(option) // call parent handleAddOptions()
    //console.log(option)

    this.setState(() => {
      return {
        error: error // render error to the screen
      }
    })
  }
}

// Stateless Functional Components
// Do not have access to "this"
// Props are passed in as the first argument
// Faster than class based components
// Cannot manage lifecycle for stateless functional components
// Best used for simple components that focus on presentation and not state
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

// const jsx = (
//   <div>
//     <Header /> {/* Reference Header Class */}
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// )

//ReactDOM.render(jsx, document.getElementById('app'))

//Reference Top Level Component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))