import characters from "../../assets/images/characters.png";
import { getBaseImageUrl } from "../../utils";

function CharactersToFind({ characterStatus, setCharacterStatus }) {
  const baseImageUrl = getBaseImageUrl();
  return (
    <>
      <div className="charactersToFind">
        {characterStatus.waldo}
        <div className={`character ${characterStatus.waldo ? "found" : ""}`}>
          <img
            src={`${baseImageUrl}/waldo.png`}
            alt="Drawing of the character Wally"
          />
          <p>Waldo</p>
        </div>
        <div className={`character ${characterStatus.wenda ? "found" : ""}`}>
          <img
            src="http://localhost:3000/images/wenda.png"
            alt="Drawing of the character Wally"
          />
          <p>Wenda</p>
        </div>
        <div className={`character ${characterStatus.wizzard ? "found" : ""}`}>
          <img
            src="http://localhost:3000/images/wizzard.png"
            alt="Drawing of the character Wally"
          />
          <p>Wizzard</p>
        </div>
        <div className={`character ${characterStatus.odlaw ? "found" : ""}`}>
          <img
            src="http://localhost:3000/images/odlaw.png"
            alt="Drawing of the character Wally"
          />
          <p>Odlaw</p>
        </div>
        {/* <img src={characters} alt="the 4 characters you need to find" /> */}
      </div>
    </>
  );
}

export default CharactersToFind;
