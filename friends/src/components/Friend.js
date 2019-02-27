import React from "react";
import "./friend.css";

//Friend
//Passing in props to display
const FriendList = props => {
  return (
    <div className="friendList">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
};

export default FriendList;
