import React from "react";
import "./Banner.css";

function Banner({ title, heading, buttonName, buttonOnClick, footer }) {
  return (
    <div className={"banner-container-signUp"}>
      <h1>{title}</h1>
      <p>{heading}</p>
      <span onClick={buttonOnClick}>
        <button className="ghost" id="signIn">
          {buttonName}
        </button>
      </span>

      <p>{footer}</p>
    </div>
  );
}

export default Banner;
