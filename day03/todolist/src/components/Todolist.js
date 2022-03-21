import React, { useCallback } from "react";
import styled from "styled-components";

const Todolist1N = styled.div`
  background-color: pink;
  margin-top: 10px;
`;
const Todolist2N = styled.div`
  background-color: hotpink;
  margin-top: 10px;
`;

function Todolist({ onRemovehanlder, state, onOpenModal, onSetSelect }) {
  const onRemoveEvent = useCallback(() => {
    onRemovehanlder(state.id);
  }, [onRemovehanlder, state.id]);

  const onClickEvent = useCallback(() => {
    onSetSelect(state.Todo);
    onOpenModal();
  }, [onSetSelect, state.Todo, onOpenModal]);

  return (
    <>
      {state.id % 2 === 0 ? (
        <Todolist2N>
          <span>{state.id}. </span>
          {state.Todo}
          <button onClick={onRemoveEvent}>완료</button>
          <button onClick={onClickEvent}>선택</button>
        </Todolist2N>
      ) : (
        <Todolist1N>
          <span>{state.id}. </span>
          {state.Todo}
          <button onClick={onRemoveEvent}>완료</button>
          <button onClick={onClickEvent}>선택</button>
        </Todolist1N>
      )}
    </>
  );
}
export default Todolist;
