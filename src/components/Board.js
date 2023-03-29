const Board = (props) => {
  return (
    <div className="container">
      <spam className="player">It's {props.turn}'s turn</spam>
      <div className="board">
        {props.squerePart.map((box, index) => {
          if (box === "") {
            return (
              <div
                key={index}
                onClick={() => props.clickHandler(index)}
                className="squereBox"
              >
                {box}
              </div>
            );
          } else {
            return (
              <div key={index} className="squereBox clicked">
                {box}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Board;
