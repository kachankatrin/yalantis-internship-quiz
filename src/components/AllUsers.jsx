import React from "react";

export default function AllUsers(props) {
  return (
    <ul>
      {props.allUsers
        ? props.allUsers.map((user) => (
            <li className="single-user" key={user.id}>
              <div>
                {user.firstName} {user.lastName}
              </div>
              <p>{user.dob}</p>
            </li>
          ))
        : "Loading users"}
    </ul>
  );
}