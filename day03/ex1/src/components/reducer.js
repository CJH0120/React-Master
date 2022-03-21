import React, { useReducer } from "react";
import { reducer } from "../reducer";

const initialState = 0;

const Reducer = () => {
  const [number, dispatch] = useReducer(reducer, initialState);

  const onIncrese = () => {
    dispatch({ type: "INCREMNET" });
  };

  const onDecrese = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrese}>+</button>
      <button onClick={onDecrese}>-</button>
    </div>
  );
};
export default Reducer;
