
console.log("visible-state-example.js is running!")

class Visibility extends React.Component {
    constructor(props) {
        super(props)
    
    this.showDetails = this.showDetails.bind(this)      
    this.state = {
        visibility: false
    }
  }

    render() {
       return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.showDetails}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
            <div>
              <p>Hey! Here are some details you should see!</p>
            </div>
        )}
      </div>
    )
   }

   showDetails() {
       console.log('button pressed')
       this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        }
     }) 
   } 

}

ReactDOM.render(<Visibility />, document.getElementById('app'))





