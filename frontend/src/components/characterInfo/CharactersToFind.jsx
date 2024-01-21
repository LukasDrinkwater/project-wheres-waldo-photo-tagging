import characters from "../../assets/images/characters.png";

function CharactersToFind() {
  return (
    <>
      <div className="charactersToFind">
        <img src={characters} alt="the 4 characters you need to find" />
      </div>
    </>
  );
}

export default CharactersToFind;
