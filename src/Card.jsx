import React from "react";

const Card = ({ name, role, hobby, pic, bio }) => {
  // const {name, role, hobby, pic, bio } = props
  return (
    <div>
      <div className="profile">
        <div className="card">
          <div className="img">
            <img src={pic} alt={name} className="profile-img" />
          </div>

          <h3 className="name">Name: {name}</h3>

          <h3 className="role">Role: {role}</h3>

          <h3 className="hobby">Hobby: {hobby}</h3>

          <h3 className="bio">Bio: {bio}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
