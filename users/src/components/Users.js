import React from "react";

import UserCard from "./UserCard";
const Users = ({ users }) => {
  return (
    <div>
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
