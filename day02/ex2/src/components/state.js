import React, { useState } from "react";
import AddState from "./addstate";
const State = () => {
  // const[변수명, 변수값을 바꿔줄 함수명] = useState(변수 기본값)
  // const state ="state 처음 시작" ;
  //   const [state, setSTATE] = useState("state 처음시작");
  const [state, setSTATE] = useState([
    {
      id: 1,
      name: "김사과",
    },
    {
      id: 2,
      name: "반하나",
    },
    {
      id: 1,
      name: "두리안",
    },
  ]);
  return (
    <>
      {state.map((p) => (
        <>
          <div key={p.id}>
            {p.id}. {p.name}
            <button value={p.id}>삭제</button>
          </div>
        </>
      ))}
      <AddState />
    </>
  );
};g

export default State;
