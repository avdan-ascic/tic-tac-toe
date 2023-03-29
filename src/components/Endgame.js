import React, { useState } from "react";
import History from "./History";
import DisplayResOfGame from "./DisplayResOfGame";

const Endgame = (props) => {
  const [gameRes, setGameRes] = useState(false);

  const gameResHandler = () => {
    setGameRes((showHistory) => !showHistory);
  };

  return (
    <div className="endgame">
      <DisplayResOfGame win={props.win} />
      <div>
        <button onClick={props.restartGame} className="endgame-btn" type="text">
          Wanna try again?
        </button>
        <button onClick={props.resetForm} className="endgame-btn" type="text">
          Reset
        </button>
        <button onClick={gameResHandler} className="endgame-btn" type="text">
          History
        </button>
      </div>

      {gameRes && <History dataOfGames={props.dataOfGames} />}
    </div>
  );
};

export default Endgame;
