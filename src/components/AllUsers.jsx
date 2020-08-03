import React from "react";

export default function AllUsers(props) {
  return (
    <ul className="grid-container all-users">
      {props.allUsers
        ? props.allUsers.map((user) => (
            <li className="grid-cell single-user" key={user.id}>
              <div>
                {`User: ${user.firstName}`} {user.lastName}
              </div>
              <p>{`Date of birth: ${new Date(user.dob).toLocaleDateString()}`}</p>
            </li>
          ))
        : "Loading users"}
    </ul>
  );
}