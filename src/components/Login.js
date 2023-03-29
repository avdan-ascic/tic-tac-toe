import React from "react";

const Login = (props) => {
  return (
    <div className="login">
      <h1>Tic-Tac-Toe</h1>
      <form className="form" onSubmit={props.onSubmit}>
        <label>Player 1</label>
        <input
          onChange={props.onChange}
          type="text"
          name="firstPlayer"
          value={props.value.firstPlayer}
        />
        <label>Player 2</label>
        <input
          onChange={props.onChange}
          type="text"
          name="secondPlayer"
          value={props.value.secondPlayer}
        />
        <button disabled={props.disabled}>START</button>
      </form>
    </div>
  );
};

export default Login;
