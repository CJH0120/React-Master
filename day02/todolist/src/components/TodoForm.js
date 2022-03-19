import React from "react";
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
  position: absolute;
`;
function TodoForm() {
  return (
    <form>
      <TodoaddInput type="text" placeholder="할 일을 적어주세요" />
      <TodoaddButton>추가</TodoaddButton>
    </form>
  );
}
export default TodoForm;
