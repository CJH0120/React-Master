import React, { useCallback, useState } from "react";
import Modal from "../components/modal/modal";
import TodoForm from "../components/TodoForm";
import Todolist from "../components/Todolist";
import Todotitle from "../components/Todotitle";
import styled from "styled-components";

function Todos() {
  const [state, setState] = useState([
    {
      id: 1,
      Todo: "리엑트 공부하기",
    },
    {
      id: 2,
      Todo: "리엑트 또 공부하기",
    },
  ]);

  // onAddhandler()
  const onAddhandler = useCallback(
    (id, Todo) => {
      setState([...state, { id: id, Todo: Todo }]);
    },
    [state]
  );

  const onRemovehanlder = useCallback(
    (id) => {
      const remove = state.filter((item) => item.id !== id);
      setState(remove);
    },
    [state]
  );

  const [open, setOpen] = useState(false);
  const [selectTodo, setSelect] = useState("");

  const onOpenModal = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const onSetSelect = useCallback((Todo) => {
    setSelect(Todo);
  }, []);

  return (
    <TodoTemplet>
      <Todotitle count={state.length} />
      <TodoForm
        onAddhandler={onAddhandler}
        id={state.length > 0 && state[state.length - 1].id}
      />
      {state.map((v) => (
        <Todolist
          key={v.id}
          state={v}
          onRemovehanlder={onRemovehanlder}
          onOpenModal={onOpenModal}
          onSetSelect={onSetSelect}
        />
      ))}
      {open && <Modal selectTodo={selectTodo} />}
    </TodoTemplet>
  );
}
export default Todos;

const TodoTemplet = styled.div`
  width: 768px;
  height: 768px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
