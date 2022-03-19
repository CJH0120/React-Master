import React, { useState, useCallback, useEffect } from "react";

const Effect = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    console.log("색이 변경 되었습니다.");
  }, [color]);

  const ChageColor = useCallback(() => {
    setColor("blue");
  }, []);

  useEffect(() => {
    console.log("시작합니다");
  }, []);

  return (
    <>
      <div>useEffect</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={ChageColor}>확인</button>
    </>
  );
};
export default Effect;
