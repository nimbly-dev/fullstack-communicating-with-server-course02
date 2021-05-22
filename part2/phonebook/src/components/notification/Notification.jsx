import React from "react";

const Notification = ({ message, type }) => {
  if (message !== "" && type === "success") {
    return (
      <div className="succesful-add">
        <p>{message}</p>
      </div>
    );
  } else if (message !== "" && type === "fail-to-delete") {
    return (
      <div className="fail-to-delete">
        <p>{message}</p>
      </div>
    );
  }
  return null;
};

export default Notification;
