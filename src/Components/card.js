import React from "react";
import "./card.css";

export default function Card({ userData }) {
    // getting the data from the API array
  console.log(userData);
  const userName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  const genders = `${userData.gender}`;
  const ages = `${userData.dob.age}`;
  const house = `${userData.location.city}`;
  const mail = `${userData.email}`;

  return (
    <section className="div-container">
      <img
        className="imaging"
        src={userData.picture.large}
        alt="userProfilePicture"
      />
      <h4>{userName}</h4>

      <div className="description">
        <p>
          A {ages} years old {genders}, who lives
          <br />
          in {house} and can be reached via {mail}.
        </p>
      </div>
    </section>
  );
}
