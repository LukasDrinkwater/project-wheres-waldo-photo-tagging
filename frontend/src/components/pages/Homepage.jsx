import ImageComponent from "../board/ImageComponent";
import CharactersToFind from "../characterInfo/CharactersToFind";

import CharacterSelect from "../board/CharacterSelectPopup";

import "./homepage.css";

function Homepage() {
  return (
    <div className="mainContainer">
      <CharactersToFind />

      <ImageComponent />
    </div>
  );
}

export default Homepage;
