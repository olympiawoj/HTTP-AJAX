import React, { Component } from "react";

//Friend
//Passing in props to display
const FriendList = props => {
  return (
    <div classNme="friendsList">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
};

export default FriendList;
