import { useReducer } from "react"

const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value >= 0 ? state - action.value : state;
            case 'reset':
            return initialState;
        default:
            return state;
    }
}

const ReducerComponent = () => {
    const [number, dispatch] = useReducer(reducer, initialState);

    const increment = () => {
        dispatch({ type: 'increment', value: 1 });
    }
    const decrement = () => {
        dispatch({ type: 'decrement', value: 1 });
    }

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default ReducerComponent;