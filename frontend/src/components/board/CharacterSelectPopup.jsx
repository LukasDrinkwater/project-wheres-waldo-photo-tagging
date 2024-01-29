import { useState } from "react";
import { getBaseImageUrl } from "../../utils.jsx";

const imageName = "whereswaldo2.png";
const baseUrl = getBaseImageUrl();

function CharacterSelect({
  userPixelPercentPosition,
  characterStatus,
  setCharacterStatus,
}) {
  const [wrongGuessPulse, setWrongGuessPulse] = useState(false);

  const stopClickPropagation = (event) => {
    event.stopPropagation();
  };

  const handButtonClick = async (e) => {
    e.preventDefault();
    const character = e.target.textContent;

    try {
      console.log(`${baseUrl}image/${imageName}/characterPick`);
      const response = await fetch(
        // `http://localhost:3000/image/${imageName}/characterPick`,
        `${baseUrl}image/${imageName}/characterPick`,
        {
          // mode: "cors",
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            character: character,
            pixelX: userPixelPercentPosition.width,
            pixelY: userPixelPercentPosition.height,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("response from guess received");
        const data = await response.json();
        if (data.message === "found") {
          // character found, update character to found in local
          const newCharacterStatus = {
            ...characterStatus,
            [character.toLowerCase()]: true,
          };
          setCharacterStatus(newCharacterStatus);
        } else {
          // add a class that is a pulse of red for 1 second
          setWrongGuessPulse(true);
          setTimeout(() => {
            setWrongGuessPulse(false);
          }, 1000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="characterSelect" onClick={stopClickPropagation}>
        <div
          className={`characterName ${characterStatus.waldo ? "found" : ""}
          
          `}
        >
          <button
            className={`${wrongGuessPulse ? "redPulse" : ""}`}
            onClick={handButtonClick}
          >
            Waldo
          </button>
        </div>
        <div
          className={`characterName ${characterStatus.wenda ? "found" : ""}`}
        >
          <button
            className={`${wrongGuessPulse ? "redPulse" : ""}`}
            onClick={handButtonClick}
          >
            Wenda
          </button>
        </div>
        <div
          className={`characterName ${characterStatus.wizzard ? "found" : ""}`}
        >
          <button
            className={`${wrongGuessPulse ? "redPulse" : ""}`}
            onClick={handButtonClick}
          >
            Wizzard
          </button>
        </div>
        <div
          className={`characterName ${characterStatus.odlaw ? "found" : ""}`}
        >
          <button
            className={`${wrongGuessPulse ? "redPulse" : ""}`}
            onClick={handButtonClick}
          >
            Odlaw
          </button>
        </div>
      </div>
    </>
  );
}

export default CharacterSelect;
