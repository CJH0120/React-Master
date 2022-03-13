import React from "react";
import TodoForm from "../components/TodoForm";
import TodoTittle from "../components/TodoTittle";
import Todolist from "../components/Todolist";

function Todos() {
  /*
  props 
  -property의 약자로, 부모에게 받아온 데이터
  상위 컴포넌트에서 하위 컴포넌트로 데이트(변수,함수)를 보낼때 혹은 받을 때 사용
  */

  let state = [
    {
      id: 1,
      Todo: "리액트 공부 하기",
    },

    {
      id: 2,
      Todo: "리액트 또 공부 하기",
    },
  ];

  return (
    <>
      <TodoTittle count={state.length} />
      <TodoForm />
      {state.map((v) => (
        <Todolist key={v.id} state={v} />
      ))}
    </>
  );
}

export default Todos;
