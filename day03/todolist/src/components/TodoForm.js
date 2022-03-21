import React, { useCallback, useState } from "react";
import styled from "styled-components";

const TodoaddInput = styled.input`
  border-radius: 5px;
  width: 500px;
  font-size: 2rem;
  position: relative;
  padding-left: 20px;
`;

const TodoaddButton = styled.button`
  border-radius: 5px;
  width: 53px;
  height: 43px;
  vertical-align: middle;
`;
function TodoForm({ onAddhandler, id }) {
  const [Todo, setTodo] = useState("");

  const onClieckEvent = useCallback(() => {
    onAddhandler(id + 1, Todo);
  }, [id, Todo, onAddhandler]);

  const onChangeEvent = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const onKeyPressEnvet = useCallback(
    (e) => {
      if (e.key === "Enter") {
        onClieckEvent();
      }
    },
    [onClieckEvent]
  );

  return (
    <>
      <TodoaddInput
        type="text"
        placeholder="할 일을 적어주세요"
        value={Todo}
        onChange={onChangeEvent}
        onKeyPress={onKeyPressEnvet}
      />
      <TodoaddButton onClick={onClieckEvent}>추가</TodoaddButton>
    </>
  );
}
export default TodoForm;
