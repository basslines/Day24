import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };
  getMyStorage = () => {
    const myCookieData = document.cookie;
    console.log(myCookieData);
    const myLocalStorageData = localStorage.getItem("Paragon");
    console.log(myLocalStorageData);
    const mySessionStorageData = sessionStorage.getItem("frontend");
    console.log(mySessionStorageData);
  };
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setMyStorage()}>Set Storage</button>
        <button onClick={() => this.getMyStorage()}>Get Storage</button>
      </div>
    );
  }
}

export default App;
