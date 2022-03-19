import React from "react";
import TodoForm from "../components/TodoForm";
import Todolist from "../components/Todolist";
import Todotitle from "../components/Todotitle";

function Todos(){
    /* 
    props
    -property의 약자로, 부모에게 받아온 데이터
    상위 컴포넌테으세 하위 컴포넌트로 데이트(변수,함수)을/를 보낼 때 혹은 받을 때 사용
    */

    let state = [
        {    
            id: 1,
            Todo: "리엑트 공부하기"   
        },
        {    
            id: 2,
            Todo: "리엑트 또 공부하기"   
        }
    ];

    return (
    <>
        <Todotitle count={state.length}/>
        <TodoForm/>
        {state.map((v) => (
            <Todolist key={v.id} state={v}/>
        ))}
    </>
    )
}
export default Todos;