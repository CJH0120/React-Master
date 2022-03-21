import React, { useRef, useState, useContext } from "react";
import { Context } from "../reducer";

const AddState = () => {
  const { state, dispatch } = useContext(Context);

  const userName = useRef();
  const [name, setName] = useState("");

  const onClickhandler = () => {
    dispatch({
      type: "INSERTSTATE",
      id: state[state.length - 1].id + 1,
      name: name,
    });
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
