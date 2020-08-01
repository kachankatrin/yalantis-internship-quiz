import React from "react";
import {
  calendar,
  listOfBirthdayUsers,
  countOfDOB,
  getClassColor,
} from "../utils.js";

export default function Calendar(props) {
  let classColor;
  return (
    <ul className="calendar">
      {calendar.map((month) => (
        <li
          className={
            "month-container " +
            getClassColor(
              countOfDOB(listOfBirthdayUsers, month.id, props.allUsers),
              classColor
            )
          }
        >
          <div>
            {month.key} {month.month}
          </div>
          {/* <props.birthdayUsers /> */}
          <ul>
            {props.allUsers
              ? listOfBirthdayUsers(month.id, props.allUsers).map((item) => (
                  <li>{item.firstName}</li>
                ))
              : "no users"}
          </ul>
          <p>
            length: {countOfDOB(listOfBirthdayUsers, month.id, props.allUsers)}
          </p>
        </li>
      ))}
    </ul>
  );
}
