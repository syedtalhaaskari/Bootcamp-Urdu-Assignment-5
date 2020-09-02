import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child = () => {
    let counterValue = useContext(CounterContext);
    return (
        <div>
            <h2>Counter Context Value is {counterValue[0]}</h2>
            <button onClick={() => counterValue[1](++counterValue[0])}>Increment Context</button>
            <br/>
            <button onClick={() => counterValue[1](--counterValue[0])}>Decrement Context</button>
            <br/>
            <button onClick={() => counterValue[1](counterValue[0] = 1)}>Reset Context</button>
        </div>
    )
}

export default Child;