import React from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg"

export const User = ({ id, email, first_name, last_name, avatar, onClickInvite, isInvited}) => (
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
    <img onClick={() => onClickInvite(id)} className="action" src={!isInvited ? plus : minus} alt="Action" />
  </li>
);
