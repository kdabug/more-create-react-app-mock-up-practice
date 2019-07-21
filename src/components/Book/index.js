import "./style.css";
import React from "react";

export const Book = props => {
  return (
    <div className="c-book__container">
      <div className="c-book__header">
        <h1>{props.title}</h1>
      </div>
      <div className="c-book__details">
        <img src={props.image} />
        <p>{props.description}</p>
      </div>
    </div>
  );
};
