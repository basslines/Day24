import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    console.log(document.cookie);
    localStorage.setItem("Paragon", "yes, but Arena first");
    console.log(localStorage);
    sessionStorage.setItem("frontend", "React");
    console.log(sessionStorage);
  };
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>
          Set Cookie
        </button>
      </div>
    );
  }
}
export default App;
