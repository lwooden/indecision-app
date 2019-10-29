"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Function Context Example
// We lose the "this" binding in Event Handlers

// Proper Context
var obj = {
  "name": "Lowell",
  getName: function getName() {
    return this.name;
  }
};

console.log(obj.getName());

// Improper Context - "this" binding is broken
var getName = obj.getName.bind(obj); // sets the context back to obj object
console.log(getName());

/* ------------------------------------------------------ */

// Parent/Top Level Component

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.parentClearList = _this.parentClearList.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.parentHandlePick = _this.parentHandlePick.bind(_this);
    _this.handleAddOptions = _this.handleAddOptions.bind(_this);

    // data whose state we want to track/control
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "render",
    value: function render() {

      // data to pass into child components
      // this is one-way communication: top level component -> child components
      var title = 'Indecision App';
      var subtitle = 'Let the computer decide for you!';
      //const options = ['One', 'Two', 'Three']

      return (
        // Child/Nested Components
        React.createElement(
          "div",
          null,
          React.createElement(Header, { title: title, subtitle: subtitle }),
          React.createElement(Action, {
            hasOptions: this.state.options.length > 0 // disable button if no options 
            , parentHandlePick: this.parentHandlePick
          }),
          React.createElement(Options, {
            options: this.state.options,
            parentClearList: this.parentClearList // passing the method as a prop so child component can access it
            , handleDeleteOption: this.handleDeleteOption
          }),
          React.createElement(AddOption, {
            handleAddOptions: this.handleAddOptions
          }),
          React.createElement(User, { name: "Lowell", age: "29" })
        )
      );
    }

    // --- Lifecycle Methods ---

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('componentDidMount()');
      // Fetch Data
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('componentDidUpdates()');
      // Save Data
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount()');
    }
    // --- Lifecycle Methods ---

  }, {
    key: "parentClearList",
    value: function parentClearList() {
      console.log('parentClearList()');
      // this.setState(() => ({ options: [] })) // shorthand syntax; implicit return of an object
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      // console.log('Calling handleDeleteOption()', option)
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "parentHandlePick",
    value: function parentHandlePick() {
      console.log('Calling parentHandlePick()');
      var randomNum = Math.floor(Math.random() * this.state.options.length); // choose a random number 
      var option = this.state.options[randomNum];
      alert(option); // invoke alert action in the browser
    }
  }, {
    key: "handleAddOptions",
    value: function handleAddOptions(option) {
      //console.log(option)
      if (!option) {
        // if empty string
        return "Enter a valid value!";
      } else if (this.state.options.indexOf(option) > -1) {
        // if value exists
        return "This option already exists!";
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []

  // Header - Stateless Function Based Component
};var Header = function Header(props) {
  return (
    // JSX To Render
    React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        props.title
      ),
      props.subtitle && React.createElement(
        "h2",
        null,
        props.subtitle
      ),
      " "
    )
  );
};

Header.defaultProps = {
  title: 'Indecision App'

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
};var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.parentHandlePick,
        disabled: !props.hasOptions
      },
      "What Should I Do?"
    )
  );
};

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
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.parentClearList },
      "Clear List"
    ),
    " ",
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
    })
  );
};

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
var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        } },
      "Remove"
    )
  );
};

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


var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOptions = _this2.handleAddOptions.bind(_this2);

    // no form submitted so error state is undefined by default
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOptions },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }

    //Event Handler

  }, {
    key: "handleAddOptions",
    value: function handleAddOptions(e) {
      e.preventDefault(); // prevents full screen rendering when form is submitted
      console.log('Form Submitted!');

      var option = e.target.elements.option.value.trim(); // trim(): removes all leading and trailing white space
      var error = this.props.handleAddOptions(option); // call parent handleAddOptions()
      //console.log(option)

      this.setState(function () {
        return {
          error: error // render error to the screen
        };
      });
    }
  }]);

  return AddOption;
}(React.Component);

// Stateless Functional Components
// Do not have access to "this"
// Props are passed in as the first argument
// Faster than class based components
// Cannot manage lifecycle for stateless functional components
// Best used for simple components that focus on presentation and not state


var User = function User(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Name: ",
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Age: ",
      props.age
    )
  );
};

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
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
