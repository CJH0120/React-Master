import React from "react";

function Hello({ name, color, islover, style }) {
  return (
    <div style={style ? style : { color }}>
      안녕하세요
      {islover && <span>💖</span>} {name}님!
    </div>
  );
}

Hello.defaultProps = {
  color: "red",
};

export default Hello;
