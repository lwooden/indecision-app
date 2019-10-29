
console.log("counterapp-state-example.js is running!")

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.subOne = this.subOne.bind(this)
        this.reset = this.reset.bind(this)

       // Define the initial state of the data I want to control 
        this.state = {
            count: props.counter,
            title: 'Low\'s Component Counter App'
        }
      }

    render() {

        return (
        <div>
          <h2>{this.state.title}</h2>
          <h1>Count: {this.state.count}</h1> {/* Reference the property in JSX */}
          <button onClick={this.addOne}>+1</button>
          <button onClick={this.subOne}>-1</button>
          <button onClick={this.reset}>reset</button>
        </div>
        )
    }

    addOne() {
      // Updates the state object behind the scenes, but does not re-render it
      // this.state.count++
      // console.logs(this.state)
        
        // Update the state and re-render it
        // setState() takes one function as a parameter w/ previous state as the argument
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 // only define the data whose state I want to update (count)
            }
         })
      }
      
      subOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
      }
      
     reset() {
        this.setState((prevState) => {
            return {
                count: prevState.count = 0
            }
        })       
      }
}

Counter.defaultProps = {
    counter: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))
