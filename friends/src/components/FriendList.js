import React, { Component } from "react";
import Friend from "./Friend";

//FriendList is a functional component
//Passing in props to display
const FriendList = props => {
  console.log("These are props", props);

  return (
    <div classNme="friendsList">
      {props.friends.map(friend => (
        <Friend friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
