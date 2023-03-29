import React, { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Login from "./components/Login";

const day = new Date();
const date = `${day.toLocaleDateString()} ${day.toLocaleTimeString()}`;

function App() {
  const [validForm, setValidForm] = useState(false);
  const [gameData, setGameData] = useState({
    firstPlayer: "",
    secondPlayer: "",
    timeOfGame: "",
    uniqueId: 0,
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setGameData({ ...gameData, [e.target.name]: value });
  };

  const startGameHandler = (e) => {
    e.preventDefault();
    setGameData({
      ...gameData,
      timeOfGame: date,
      uniqueId: ++gameData.uniqueId,
    });
    setValidForm(true);
  };

  const resetForm = () => {
    setValidForm(false);
    setGameData({
      firstPlayer: "",
      secondPlayer: "",
      timeOfGame: "",
      uniqueId: 0,
    });
  };

  return (
    <div className="App">
      {validForm ? (
        <Game gameData={gameData} resetForm={resetForm} />
      ) : (
        <Login
          onChange={onChangeHandler}
          onSubmit={startGameHandler}
          value={gameData}
          disabled={!gameData.firstPlayer || !gameData.secondPlayer}
        />
      )}
    </div>
  );
}

export default App;
