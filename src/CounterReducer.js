const CounterReducer = (state, action) => {
    switch(action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return state = 1;
    }
}

export default CounterReducer;