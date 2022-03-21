import React, { useState } from "react";

const Test = () => {
  const [number, setNumber] = useState(0);

  const onIncrese = () => {
    setNumber((prev) => prev + 1);
  };

  const onDecrese = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={onIncrese}>+</button>
      <button onClick={onDecrese}>-</button>
    </div>
  );
};
export default Test;
