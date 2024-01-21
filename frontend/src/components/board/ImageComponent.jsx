import { useState, useEffect, useRef } from "react";

import wheresWaldoImage from "../../assets/images/whereswaldo2.png";

import Popup from "./Popup";

function ImageComponent() {
  const [showPopup, setShowPopup] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    // nativeEvent.offset is relative to the div
    // for getting the pixel, but doesnt work for setting the popup location
    const xPixel = event.nativeEvent.offsetX;
    const yPixel = event.nativeEvent.offsetY;
    const x = event.clientX;
    const y = event.clientY;
    console.log(x, y);
    setCursorPosition({ x, y });
  };
  return (
    <>
      <div className="wheresWaldoImage" onClick={handleClick}>
        <img src={wheresWaldoImage} alt="image of a wheres waldo game" />

        {showPopup && <Popup cursorPosition={cursorPosition} />}
      </div>
    </>
  );
}

export default ImageComponent;
