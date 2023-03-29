import React from "react";

const DisplayResOfGame = (props) => {
  return (
    <div>
      {!props.win ? (
        <p className="endgame-header">DRAW</p>
      ) : (
        <p className="endgame-header">Winner is {props.win}</p>
      )}
    </div>
  );
};

export default DisplayResOfGame;
