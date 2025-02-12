import React from "react";
import plus from "../assets/plus.svg";

export const User = ({ id, email, first_name, last_name, avatar }) => (
  <li>
    <div>
      <img className="avatar" src={avatar} alt="User" />
      <div>
        <h3>
          {first_name} {last_name}
        </h3>
        <p>{email}</p>
      </div>
    </div>
    <img className="action" src={plus} alt="Action" />
  </li>
);
