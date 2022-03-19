import React, { useState } from "react";
import AddState from "./addstate";
/*
function State(){

}
*/

const State = () => {
  // const [변수명, 변수값을 바꿔줄 함수명] = useState(변수 기본값)
  // const state = "state 처음시작";
  // const [state, setState] = useState("state 처음 시작")

  const [state, setState] = useState([
    {
      id: 1,
      name: "김사과",
    },
    {
      id: 2,
      name: "반하나",
    },
    {
      id: 3,
      name: "두리안",
    },
  ]);

  const onClickEvent = (id, name) => {
    setState([...state, { id: id, name: name }]);
  };

  /*
  state의 불변성

  const obj = {}
  const obj2 = {}

  const odj3 = obj // obj와 같은 참조 값을 가진다
  
  따라서 ojb가 가지고 있는 객체 값이 변경되면 obj3도 같은 객체를 가지기 떄문에
  값이 공유된다, 즉 데이터 원본 훼손 이러한 훼손은 예상치 못한 오류와 버그를 발생

  state값이 영구 훼손되면 바뀐지 못찾아요 state = newState -> new State

  1. spread operator
   (...)

  2. immer.js
   (...) 귀찮잖아요 = 너 이거 귀찮지? 내가 이런거 한번에 해결해줄거 만들어줄게
   draft.state 라이브러리 ( 리덕스 사용할 떄 한번 써볼 것 )
  */

  /*map => 반복 */
  /*filter => 거르다 */

  const onRemove = (e) => {
    console.log(typeof e.target.value);
    const removeState = state.filter(
      (item) => item.id !== parseInt(e.target.value)
    );
    setState(removeState);
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
      <AddState
        onClickEvent={onClickEvent}
        stateId={state[state.length - 1].id}
      />
    </>
  );
};
export default State;
