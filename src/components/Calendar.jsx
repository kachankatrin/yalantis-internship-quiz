import React from "react";
import { calendar, getClassColor } from "../utils.js";
import Modal from "./Modal";

export default function Calendar(props) {
  const {
    listOfBirthdayUsers,
    isVisible,
    handleMouseEnter,
    handleMouseLeave,
  } = props;
  let classColor;

  return listOfBirthdayUsers.length ? (
    <ul className="grid-container">
      {calendar.map((month, index) => {
        const users = listOfBirthdayUsers[index][month.month].users;
        return (
          <li
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={index}
            className={"grid-cell " + getClassColor(users.length, classColor)}
          >
            <div>
              {month.key} {month.month}
            </div>
            {isVisible[index] && <Modal users={users} />}
          </li>
        );
      })}
    </ul>
  ) : (
    "Calendar is loading"
  );
}