import React, { useRef, useState } from "react";

const AddState = ({ onClickEvent, stateId }) => {
  //훅 함수 사용시 컴포넌트명 앞 대문자

  const userName = useRef();
  const [name, setName] = useState("");

  const onClickhandler = () => {
    onClickEvent(stateId + 1, name);
    setName("");
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onReset = () => {
    setName("");
    userName.current.focus();
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={onChangeHandler}
        placeholder="이름을 입력하세요"
        ref={userName}
      />
      <button onClick={onClickhandler}>추가</button>
      <button onClick={onReset}>초기화</button>
    </>
  );
};
export default AddState;
