import React,{useState} from "react";

const Counters = ({c}) => {

    const [count , setcount] = useState(c);

    const countup = () => {
        setcount(count +1);
    };
    const countdown = () => {
        setcount(count -1);
    };
    return(
        <div>
            <h2>{count}</h2>
        <button onClick={countup}>+</button>
        <button onClick={countdown}>-</button>

        </div>
    )
}


export default Counters;