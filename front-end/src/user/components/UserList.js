import React from "react";
import "./UserItem.css";
import UserItem from "./UserItem";
export const UserList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="center">
        <h2>No User Found</h2>
      </div>
    );
  }

  return (
    <ul className="user-list">
      {props.item.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placecount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
