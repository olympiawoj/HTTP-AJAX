import React from "react";
// import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

//FriendForm is a class component bc we are managing state here.

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  postFriend = e => {
    e.preventDefault();
    this.props.postFriendToServer(this.state.friend);
  };

  render() {
    return (
      <form onSubmit={this.postFriend}>
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
        <button type="submit">POST FRIEND</button>
      </form>
    );
  }
}

export default FriendForm;
