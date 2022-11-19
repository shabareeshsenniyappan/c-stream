import React, { useRef, useEffect } from "react";
import "./Cards.css";

function PlanCards({ price = 100, title = "dfgsdg", desc = "dsfsdf", grey }) {
  return (
    <a className={`data-card ${grey && "grey"}`}>
      {grey && (
        <span className="tick">
          <img src="https://img.icons8.com/windows/32/null/--checkmark-yes.png" />
        </span>
      )}
      <h3>{"₹ " + price}</h3>
      <h4>{title}</h4>
      <p>{desc}.</p>
      <span class="link-text">
        Plans Of C-stream
        <svg
          width="25"
          height="16"
          viewBox="0 0 25 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
            fill="#753BBD"
          />
        </svg>
      </span>
    </a>
  );
}

export default PlanCards;
