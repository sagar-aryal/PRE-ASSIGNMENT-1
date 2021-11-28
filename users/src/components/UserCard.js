import React from "react";
import Button from "./Button";

const UserCard = ({ id, name, email, website }) => {
  const firstNameLetter = name.charAt(0).toUpperCase();
  const domainName = email.substring(email.indexOf("@"));
  const userURL = `http://${website}.com`;

  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <h1>{firstNameLetter}</h1>
        </div>
        <div className="card__content">
          <h2>{name}</h2>
          <p>{domainName}</p>
          <a href={userURL}>{userURL}</a>
        </div>
        <div className="card__btn">
          <Button id={id} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
