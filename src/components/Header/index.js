import "./style.css";
import React from "react";

export const Header = () => {
  return (
    <div className="c-header__container">
      <h1> Book App </h1>
      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>About</li>
      </ul>
    </div>
  );
};
