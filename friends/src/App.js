import React, { Component } from "react";

import { Route, NavLink, withRouter } from "react-router-dom";

import axios from "axios";

import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";

import "./App.css";

//Add constructor & CDM, set friends to emtpy list
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null
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
      .catch(err => alert("you have a CDM error:"));
  }
  //Create setForm function which takes in an event and sets state with the response data

  setUpdateForm = friend => {
    this.setState({
      activeFriend: friend
    });
    console.log(this.state.activeItem);
    this.props.history.push("/friends-form");
  };

  updateFriendFromServer = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        console.log("Update Response:", response);
        this.setState({
          activeFriend: null,
          friends: response.data
        });
        this.props.history.push("/");
      })
      .catch(error => alert("You have an Update Friend Error"));
  };

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
        console.log("Post Response:", response);
        this.setState({ friends: [...this.state.friends, friend] });
      })
      .catch(error => console.log("Error: Your postFriendToServer Failed"));
  };

  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Friends</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar> */}
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/friends-form">Friend Form</NavLink>
            </NavItem>
          </Nav>
          {/* </Collapse> */}
        </Navbar>

        <Route
          exact
          path="/"
          render={props => {
            return (
              <FriendList
                {...props}
                friends={this.state.friends}
                deleteFriendFromServer={this.deleteFriendFromServer}
                setUpdateForm={this.setUpdateForm}
              />
            );
          }}
        />

        {/* <FriendList
          friends={this.state.friends}
          deleteFriendFromServer={this.deleteFriendFromServer}
          setUpdateForm={this.setUpdateForm}
        /> */}

        <Route
          path="/friends-form"
          render={props => (
            <FriendForm
              {...props}
              postFriendToServer={this.postFriendToServer}
              activeFriend={this.state.activeFriend}
              updateFriendFromServer={this.updateFriendFromServer}
            />
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
