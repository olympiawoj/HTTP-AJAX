import React from "react";
import "./friend.css";

//Friend
//Passing in props to display

const Friend = props => {
  return (
    <div className="friendList">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
      <button onClick={e => props.deleteFriendFromServer(e, props.friend.id)}>
        Delete Item
      </button>
      <button onClick={e => props.setUpdateForm(props.friend)}>
        Update Friend
      </button>
    </div>
  );
};

export default Friend;
