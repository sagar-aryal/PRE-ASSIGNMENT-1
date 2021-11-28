import React from "react";
import { Link } from "react-router-dom";

const Button = ({ id }) => {
  return (
    <div>
      <Link to={`/users/${id}`}>More Details</Link>
    </div>
  );
};

export default Button;
