import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setMyStorage()}>Set my Storage</button>
      </div>
    );
  }
  setMyStorage = () => {
    document.cookie = "Year=2021";
    console.log(document.cookie);
    localStorage.setItem("Paragon", "yes, but Arena first");
    console.log(localStorage);
    sessionStorage.setItem("frontend", "React");
    console.log(sessionStorage);
  };
}
export default App;
