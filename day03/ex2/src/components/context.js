import React, { useContext } from "react";
import AddState from "./addState";
import { Context } from "../reducer";

const State = () => {
  const { state, dispatch } = useContext(Context);

  const onRemove = (e) => {
    dispatch({ type: "REMOVESTATE", id: parseInt(e.target.value) });
  };

  return (
    <>
      {state.map((p) => (
        <>
          <div key={p.id}>
            {p.id}. {p.name}
            <button value={p.id} onClick={onRemove}>
              삭제
            </button>
          </div>
        </>
      ))}
      <AddState />
    </>
  );
};
export default State;
