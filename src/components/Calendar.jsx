import React, { useEffect } from "react";
import { calendar, getClassColor } from "../utils.js";

export default function Calendar(props) {
  const {
    listOfBirthdayUsers,
    allUsers,
    getListOfBirthdayUsers,
    isVisible,
    handleMouseEnter,
    handleMouseLeave,
  } = props;
  useEffect(() => {
    calendar.map((month) => getListOfBirthdayUsers(month.id, month.month));
  }, [allUsers, getListOfBirthdayUsers]);

  let classColor;

  return allUsers.length ? (
    <ul className="calendar">
      {calendar.map((month, index) => (
        <li
          id={month.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          key={index}
          className={
            "month-container " +
            getClassColor(listOfBirthdayUsers[month.month].length, classColor)
          }
        >
          <div>
            {month.key} {month.month}
          </div>
          {/* <props.birthdayUsers /> */}
          {isVisible[index] && (
            <ul id={month.id}>
              {listOfBirthdayUsers[month.month].users.map((item) => (
                <li key={item.id}>
                  {item.firstName} {item.lastName}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  ) : (
    "Calendar is loading"
  );
}
