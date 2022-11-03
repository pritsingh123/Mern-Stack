import React from "react";
import UserList from "../components/UserList";

export const Users = () => {
  const USERS = [
    // {
    //   id: "u1",
    //   name: "prit",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIeY7RcsP7__Q5UN6vsOeFaYr2YDHwbYRUSMJAf2RF&s",
    //   places: 10,
    // },
    // {
    //   id: "u2",
    //   name: "pritsingh",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIeY7RcsP7__Q5UN6vsOeFaYr2YDHwbYRUSMJAf2RF&s",
    //   places: 20,
    // },
  ];

  return <UserList item={USERS} />;
};

export default Users;
