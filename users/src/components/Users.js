import React from "react";

import UserCard from "./UserCard";
const Users = ({ users }) => {
  return (
    <div className="container">
      {/* The map() function is used for iterating and rendering required data from users array */}
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          website={user.website}
        />
      ))}
    </div>
  );
};

export default Users;
