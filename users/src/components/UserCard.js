import React from "react";
import Button from "./Button";

const UserCard = ({ id, name, email, website }) => {
  const image = name.charAt(0).toUpperCase();
  const domainName = email.substring(email.indexOf("@"));
  const userURL = `http://${website}.com`;

  return (
    <div>
      <div>{image}</div>

      <div>{name}</div>
      <div>{domainName}</div>
      <a href={userURL}>{userURL}</a>
      <Button id={id} />
    </div>
  );
};

export default UserCard;
