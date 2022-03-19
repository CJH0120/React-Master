import React, { useCallback, useMemo, useState } from "react";

const Callback = () => {
  const [color, setColor] = useState("red");

  const ChageColor = useCallback(() => {
    setColor("blue");
    console.log("색깔 변경");
  }, []);

  return (
    <>
      <div>useCallback</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={ChageColor}>확인</button>
    </>
  );
};
export default Callback;
