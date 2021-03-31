import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setMyStorage()}>Set my Storage</button>
        <button onClick={() => this.getMyStorage()}>Get my Storage</button>
      </div>
    );
  }
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
}

export default App;
