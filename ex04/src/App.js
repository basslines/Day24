import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
    console.log(localStorage);
  };
  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>
          Set Local Stoage
        </button>
        <button type="button" onClick={this.getLocalStorage}>
          Get Local Storage
        </button>
      </div>
    );
  }
}
export default App;
