import { createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/pages/Homepage";

import "./App.css";

export const CharacterStatus = createContext();

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
