import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setLocalStorage()}>Set Local Stoage</button>
      </div>
    );
  }
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
    console.log(localStorage);
  };
}
export default App;
