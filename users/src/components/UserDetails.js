import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = ({ users }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log(id);

  return (
    <div className="container">
      {/* Starting from react-router-v6, we cannot use useHistory() to go back 
      insted we use useNavigate() which is quite easy as belows */}
      <button onClick={() => navigate(-1)} className="goBack__btn">
        ← Go Back
      </button>
      {/* The filter() Array method creates a new array with elements that fall 
      under a given criteria (i.e if user.id matches with id obtained from useParams()) from an existing 
      array which is then mapped using map() to call every element in the calling array 
      to display all the users details.*/}
      {users
        .filter((user) => user.id === parseInt(id))
        .map((user) => (
          <div key={user.id}>
            <div className="card__details">
              <ul>
                <li>{`name: ${user.name}`}</li>
                <li>{`username: ${user.username}`}</li>
                <li>{`email: ${user.email}`}</li>
                <li>{`phone: ${user.phone}`}</li>
                <li>{`company: ${user.company.name}`}</li>
                <li>{`website: ${user.website}`}</li>
                <li>
                  address:
                  <ul>
                    <li>{`street: ${user.address.street}`}</li>
                    <li>{`suite: ${user.address.suite}`}</li>
                    <li>{`city: ${user.address.city}`}</li>
                    <li>{`zipcode: ${user.address.zipcode}`}</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserDetails;
