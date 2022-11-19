import React, { useRef, useEffect } from "react";
import "./Cards.css";

function Cards({
  url = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  title = "dfgsdg",
  desc = "dsfsdf",
  grey,
}) {
  return (
    <div className={`card ${grey && "grey"}`}>
      {grey && (
        <span className="tick">
          <img src="https://img.icons8.com/windows/32/null/--checkmark-yes.png" />
        </span>
      )}
      <div className={"vid-player-crd"}>
        <video
          onClick={(e) => e?.requestFullscreen}
          src={url}
          width="350"
          height="350"
          controls
          muted
          // autoPlay
        ></video>
      </div>

      <div class="container">
        <div>
          <b>{title}</b>
        </div>
        <p className="desc">{desc?.split(0, 100)}</p>
      </div>
    </div>
  );
}

export default Cards;
