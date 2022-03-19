import React from "react";

function Todotitle(count){
    console.log(count.count);

    return (
    <div className="navbar">
        할 일 목록 리스트 <span>{count.count}
        </span>개
    </div>)
}
export default Todotitle;