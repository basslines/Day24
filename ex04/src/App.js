import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setLocalStorage()}>Set Local Stoage</button>
        <button onClick={() => this.getLocalStorage()}>Get Local Stoage</button>
      </div>
    );
  }
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
    console.log(localStorage);
  };
  getLocalStorage = () => {
    const myLocalStorageData = localStorage.getItem("Arena");
    console.log(myLocalStorageData);
  };
}
export default App;
