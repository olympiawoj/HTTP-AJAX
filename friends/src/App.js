import React, { Component } from "react";
import "./App.css";
import axios from "axios";

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

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
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => alert("you have a CDM error:", err));
  }

  deleteFriendFromServer = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        console.log("Delete Response:", response);
        this.setState({ friends: response.data });
      })
      .catch(error =>
        console.log("Delete Error: Your deleteFriendFromServer Failed")
      );
  };

  postFriendToServer = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response => {
        console.log("Response:", response);
        this.setState({ friends: [...this.state.friends, friend] });
      })
      .catch(error => console.log("Error: Your postFriendToServer Failed"));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <FriendList
          friends={this.state.friends}
          deleteFriendFromServer={this.deleteFriendFromServer}
        />
        <FriendForm postFriendToServer={this.postFriendToServer} />
      </div>
    );
  }
}

export default App;
