import React from "react";
import styled from "styled-components";

const Modal = ({ selectTodo }) => {
  return (
    <ModalTemplet>
      <p>
        <span>선택된 할일 리스트 :</span>
        <input type="text" readOnly value={selectTodo} />
      </p>
    </ModalTemplet>
  );
};
export default Modal;

const ModalTemplet = styled.div`
  width: 384px;
  height: 60px;
  border-radius: 16px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  z-index: 100;
  border: 10px solid salmon;
`;
