const imageName = "whereswaldo2.png";

function CharacterSelect({ userPixelPercentPosition }) {
  const stopClickPropagation = (event) => {
    event.stopPropagation();
  };

  const handButtonClick = async (e) => {
    e.preventDefault();
    const character = e.target.value;

    try {
      const response = await fetch(
        // http://localhost:3000/image/whereswaldo2.png
        `http://localhost:3000/image/${imageName}/characterPick`,
        {
          mode: "cors",
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

      if (response.ok) {
        // character found do something
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="characterSelect" onClick={stopClickPropagation}>
        <div className="characterName">
          <button onClick={handButtonClick}>Waldo</button>
        </div>
        <div className="characterName">
          <button>Wenda</button>
        </div>
        <div className="characterName">
          <button>Wizzard</button>
        </div>
        <div className="characterName">
          <button>Odlaw</button>
        </div>
      </div>
    </>
  );
}

export default CharacterSelect;
