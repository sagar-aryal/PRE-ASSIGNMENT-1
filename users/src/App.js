import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";

function App() {
  //users api to use to get the users data
  const baseURL = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  //Axios is used to perform a GET request from baseUrl that allows to make requests to a given endpoint.
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  //console.log(data);
  return (
    //Binding the application to perform component based routing using react-router-dom module
    //Enables to navigate with various components and facilitates component-based routing according to the needs of the app
    //V6 has some changes where the old fashion of using Switch, exact, useHistory etc are removed.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users users={data} />} />
        <Route path="/users/:id" element={<UserDetails users={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
