import React from "react";

function TodoTittle(count) {
  console.log(count.count);
  return (
    <div className="navbar">
      할일 목록 리스트<span>{count.count}</span>개
    </div>
  );
}

export default TodoTittle;
