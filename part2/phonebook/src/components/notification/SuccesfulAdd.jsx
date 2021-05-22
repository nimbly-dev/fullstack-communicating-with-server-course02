import React from "react";

const SuccesfulAdd = ({ message }) => {
  if (message != "") {
    return (
      <div className="succesful-add">
        <p>{message}</p>
      </div>
    );
  }
  return null;
};

export default SuccesfulAdd;
