import React from "react";

export default function Modal(props) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <p>Our Birthday people</p>
        <ul id={props.id}>
          {props.users.map((item) => (
            <li key={item.id}>
              {item.firstName} {item.lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}