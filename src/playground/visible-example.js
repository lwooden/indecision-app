
console.log("visible.js is running!")

let visibility  = false

const showDetails = () => {
 
    visibility = !visibility
    updateVisibilityApp()
}




const appRoot = document.getElementById("app");

const updateVisibilityApp = () => {
    const template4 = (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={showDetails}>
          {visibility ? 'Hide details' : 'Show details'}
          </button>
          {visibility && (
              <div>
                <p>Hey! Here are some details you should see!</p>
              </div>
          )}
        </div>
      );
    ReactDOM.render(template4, appRoot)
}

updateVisibilityApp()