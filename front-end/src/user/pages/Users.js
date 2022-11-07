import React from "react";
import UserList from "../components/UserList";

export const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "prit",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
      places: 10,
    },
    {
      id: "u2",
      name: "pritsingh",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
      places: 20,
    },
    {
      id: "u3",
      name: "pritsingh",
      image:
        "https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png",
      places: 20,
    },
  ];

  return <UserList item={USERS} />;
};

export default Users;
