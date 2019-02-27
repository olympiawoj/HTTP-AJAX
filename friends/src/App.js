import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import FriendList from "./components/FriendList";

//Add constructor & CDM, set friends to emtpy list
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log("CDM now running");
    //Axios is a library that helps us make HTTP cals from app to server. We need to to import axios give access to HTTP methods (get & then)

    //.get() method is an HTTP method that READS from our DB, takes in a URL
    //.then() method tells JavaScript what to do next, when the asynx has resolved successfully
    //.catch method tells JS what to do if the asynx promise is rejected
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => alert("you have a CDM error:", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
