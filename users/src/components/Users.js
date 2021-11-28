import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

//users api to use to get the users data
const baseURL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          website={user.website}
        />
      ))}
    </div>
  );
};

export default Users;
