import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
    console.log(localStorage);
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>
          Set Local Stoage
        </button>
      </div>
    );
  }
}
export default App;
