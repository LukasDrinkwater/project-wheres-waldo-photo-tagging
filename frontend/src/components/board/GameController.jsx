import { useState, useRef, useEffect } from "react";

function GameController({
  characterStatus,
  setCharacterStatus,
  gameStatus,
  setGameStatus,
}) {
  const [timeCounter, setTimeCounter] = useState(0);
  const timerId = useRef();

  const startTimer = () => {
    resetTimer();
    setGameStatus((prevState) => ({ ...prevState, finished: false }));
    timerId.current = setInterval(() => {
      setTimeCounter((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
    // setTimeCounter(0);
  };

  const resetTimer = () => {
    stopTimer();
    if (timeCounter) {
      setTimeCounter(0);
    }
  };

  const handleResetClick = (e) => {
    e.preventDefault();

    setCharacterStatus({
      waldo: false,
      wenda: false,
      wizzard: false,
      odlaw: false,
    });
    setGameStatus((prevState) => ({ ...prevState, started: false }));
    stopTimer();
  };

  const handleStartClick = (e) => {
    e.preventDefault();

    setGameStatus((prevState) => ({ ...prevState, started: true }));
    startTimer();
  };

  useEffect(() => {
    const allCharactersFound = Object.values(characterStatus).every(Boolean);

    if (allCharactersFound) {
      setGameStatus((prevState) => ({ ...prevState, finished: true }));

      stopTimer();
    }
  }, [characterStatus]);

  return (
    <>
      <div className="gameControllerContainer">
        <div className="startResetContainer">
          <div className="gameInfo">
            {gameStatus.started ? (
              <button id="resetButton" onClick={handleResetClick}>
                Reset Game
              </button>
            ) : (
              <button id="startButton" onClick={handleStartClick}>
                Start Game
              </button>
            )}

            <div className="stopwatch">
              <p>Time: {timeCounter}</p>
            </div>
          </div>
        </div>
        {gameStatus.finished && (
          <div className="gameFinished">
            <h1>All Characters Found! Time: {timeCounter}</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default GameController;
