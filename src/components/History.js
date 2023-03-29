const History = (props) => {
  console.log(props);
  return props.dataOfGames.map((data) => {
    return data.map((item, index) => {
      console.log(item);
      return (
        <div key={Math.random() * index} className="history">
          <div>{item.timeOfGame}</div>
          <div>
            {item.firstPlayer} vs {item.secondPlayer}
          </div>
          <div>{item.winner !== "draw" ? `${item.winner} won` : "draw"}</div>
        </div>
      );
    });
  });
};

export default History;
