import React, { useMemo, useState } from "react";

const Memo = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("");

  //   const getColor = () => {
  //     console.log(`색은 ${color} 입니다`);
  //   };

  //   const getText = () => {
  //     console.log("텍스트는 실행하지 않습니다");
  //   };

  const getColor = useMemo(() => console.log(`색은 ${color} 입니다`), [color]);
  const getText = useMemo(
    () => console.log("텍스트는 실행하지 않습니다"),
    [text]
  );

  const ChageColor = () => {
    setColor("blue");
  };

  return (
    <>
      <div>useMemo</div>
      <input type="text" readOnly value={color} style={{ color }} />
      <button onClick={ChageColor}>확인</button>
    </>
  );
};
export default Memo;
