import React from "react";
import styled from "styled-components";

const Todolist1N = styled.div`
  background-color: pink;
  margin-top: 10px;
`;
const Todolist2N = styled.div`
  background-color: hotpink;
  margin-top: 10px;
`;

function Todolist(props) {
  let stateInt;
  if (props.state.id % 2 === 0) {
    stateInt = true;
  } else {
    stateInt = false;
  }

  return (
    <>
      {stateInt ? (
        <Todolist2N>
          <span>{props.state.id}. </span>
          {props.state.Todo}
          <button>완료</button>
        </Todolist2N>
      ) : (
        <Todolist1N>
          <span>{props.state.id}. </span>
          {props.state.Todo}
          <button>완료</button>
        </Todolist1N>
      )}
    </>
  );
}
export default Todolist;
