import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const { id } = useParams();
  //console.log(id);
  console.log(users);

  return (
    <div>
      {users
        .filter((user) => user.id === parseInt(id))
        .map((user) => (
          <div key={user.id}>
            <div>{`- name: ${user.name}`}</div>
            <div>{`- username: ${user.username}`}</div>
            <div>{`- email: ${user.email}`}</div>
            <div>{`- phone: ${user.phone}`}</div>
            <div>{`- company: ${user.company.name}`}</div>
            <div>{`- website: ${user.website}`}</div>
            <div>- address:</div>
            <ul>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.city}</li>
              <li>{user.address.zipcode}</li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default UserDetails;
