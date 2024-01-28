import { useState, useEffect } from "react";
import { getBaseImageUrl } from "../../utils.jsx";

// import wheresWaldoImage from "../../assets/images/whereswaldo2.png";

import Popup from "./Popup";

function ImageComponent({ characterStatus, setCharacterStatus }) {
  const baseImageUrl = getBaseImageUrl();
  const [showPopup, setShowPopup] = useState(false);
  // cursorPosition for location of popup
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // userpixelPosition for where the user has clicked on the image
  const [userPixelPosition, setUserPixelPosition] = useState({ x: 0, y: 0 });
  // userPixelPercentPosition for where the user has clicked on the image
  const [userPixelPercentPosition, setUserPixelPercentPosition] = useState({
    width: 0,
    height: 0,
  });
  const [wheresWaldoImage, setWheresWaldoImage] = useState();

  const [error, setError] = useState("");

  useEffect(() => {
    // console.log(wheresWaldoImageSize);
  }, [userPixelPosition, wheresWaldoImage]);

  const handleClick = (event) => {
    event.stopPropagation();
    setShowPopup(!showPopup);
    // nativeEvent.offset is relative to the div
    // for getting the pixel, but doesnt work for setting the popup location
    const xPixel = event.nativeEvent.offsetX;
    const yPixel = event.nativeEvent.offsetY;
    const width = event.target.clientWidth;
    const height = event.target.clientHeight;

    // calculate % value
    const widthPercent = (xPixel / width) * 100;
    const heightPercent = (yPixel / height) * 100;
    // get cursor posision for setting popup location
    const x = event.clientX;
    const y = event.clientY;

    setCursorPosition({ x, y });
    setUserPixelPercentPosition({ width: widthPercent, height: heightPercent });
  };

  // API request to get the image
  useEffect(() => {
    const getWheresWaldoImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/image/whereswaldo2.png`,
          {
            // credentials: "include",
            method: "GET",
            mode: "cors",
            // headers: {
            // "Content-Type": "application/json",
            // },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setWheresWaldoImage(data.imageUrl);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    getWheresWaldoImage();
  }, []);

  return (
    <>
      <div className="wheresWaldoImage" onClick={handleClick}>
        <img
          src={`${baseImageUrl}/whereswaldo2.png`}
          alt="image of a wheres waldo game"
        />

        {showPopup && (
          <Popup
            cursorPosition={cursorPosition}
            setShowPopup={setShowPopup}
            userPixelPosition={userPixelPosition}
            userPixelPercentPosition={userPixelPercentPosition}
            characterStatus={characterStatus}
            setCharacterStatus={setCharacterStatus}
          />
        )}
      </div>
    </>
  );
}

export default ImageComponent;
