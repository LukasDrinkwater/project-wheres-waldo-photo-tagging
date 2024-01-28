import ImageComponent from "../board/ImageComponent";
import CharactersToFind from "../characterInfo/CharactersToFind";
import GameController from "../board/GameController";

import "./homepage.css";
import { useState } from "react";

function Homepage() {
  const [characterStatus, setCharacterStatus] = useState({
    waldo: false,
    wenda: false,
    wizzard: false,
    odlaw: false,
  });

  const [gameStatus, setGameStatus] = useState({
    started: false,
    finished: false,
  });

  return (
    <div className="mainContainer">
      <CharactersToFind
        characterStatus={characterStatus}
        setCharacterStatus={setCharacterStatus}
      />
      <GameController
        characterStatus={characterStatus}
        setCharacterStatus={setCharacterStatus}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      {gameStatus.started ? (
        <ImageComponent
          characterStatus={characterStatus}
          setCharacterStatus={setCharacterStatus}
        />
      ) : (
        <div className="imagePlaceholder">
          <h1>Press Start Game to start</h1>
        </div>
      )}
    </div>
  );
}

export default Homepage;
