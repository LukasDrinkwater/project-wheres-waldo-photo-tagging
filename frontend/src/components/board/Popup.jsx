import { useState, useEffect, useRef } from "react";

import "./popup.css";

import CharacterSelect from "./CharacterSelectPopup";

function Popup({ cursorPosition, userPixelPercentPosition }) {
  const popupRef = useRef(null);

  useEffect(() => {
    // console.log(cursorPosition);
  }, [popupRef, cursorPosition]);

  useEffect(() => {
    const popup = popupRef.current;
    // console.log(popup);
    // const rect = popup.getBoundingClientRect();
    // console.log(rect);
    popup.style.left = `${cursorPosition.x + 10}px`;
    popup.style.top = `${cursorPosition.y}px`;
  }, [cursorPosition]);

  return (
    <div className="popup" ref={popupRef}>
      {/* <div className="popupInner"> */}
      <CharacterSelect userPixelPercentPosition={userPixelPercentPosition} />
      {/* </div> */}
    </div>
  );
}

export default Popup;
