import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1);
    return (
        <div>
            <h2>Counter Reducer Value is {state}</h2>
            <button onClick={() => dispatch("INCREMENT")}>Increment Reducer</button>
            <br/>
            <button onClick={() => dispatch("DECREMENT")}>Decrement Reducer</button>
            <br/>
            <button onClick={() => dispatch("RESET")}>Reset Reducer</button>
        </div>
    )
}

export default Child2;