import React from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

//FriendForm is a class component bc we are managing state here.

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.activeFriend || {
        name: "",
        age: "",
        email: ""
      }
    };
  }
  //If our activeFriend is NOT null AND out activeFriend is not equal to our previous activeFriend in state, then setstate of our friend equal to our activeFriend.
  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friend: this.props.activeFriend
      });
    }
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  //define handleSubmit function to toggle between postFriend and updateFriend
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.activeFriend) {
      this.props.updateFriendFromServer(
        this.state.friend.id,
        this.state.friend
      );
    } else {
      this.props.postFriend();
    }
  };

  postFriend = e => {
    e.preventDefault();
    this.props.postFriendToServer(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="string"
          name="name"
          placeholder="Name"
          value={this.state.friend.name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.friend.age}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.friend.email}
          onChange={this.handleChange}
        />
        <button type="submit">
          {this.props.activeFriend
            ? "Update Friend (PUT)"
            : "Add New Friend (POST)"}
        </button>
      </form>
    );
  }
}

export default FriendForm;
