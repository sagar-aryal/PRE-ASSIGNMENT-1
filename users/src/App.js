import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  //users api to use to get the users data
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  //console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users users={data} />} />
        <Route path="/users/:id" element={<UserDetails users={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
