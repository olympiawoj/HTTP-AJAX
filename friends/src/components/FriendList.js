import React from "react";
import Friend from "./Friend";

//FriendList is a functional component
//Passing in props to display
const FriendList = props => {
  //   console.log("These are props", props);

  return (
    <div className="friendsList">
      {props.friends.map(friend => (
        <Friend
          key={friend.email}
          friend={friend}
          deleteFriendFromServer={props.deleteFriendFromServer}
          setUpdateForm={props.setUpdateForm}
        />
      ))}
    </div>
  );
};

export default FriendList;
