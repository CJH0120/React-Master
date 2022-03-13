import React from "react";
import styled from "styled-components";

const TodoaddInput = styled.input`
  border-radius : 5px;
  width :400px;
  font-size : 2rem;
  position : relative;
  padding -left:20px;
`;

const TodoaddBtn = styled.button`
  background-color: white;
  border: 1px solid steelblue;
  height: 40px;
  width: 100px;
`;

function TodoForm() {
  return (
    <form>
      <TodoaddInput type="text" placeholder="할 일을 적어주세요" />

      <TodoaddBtn>추가</TodoaddBtn>
    </form>
  );
}

export default TodoForm;
