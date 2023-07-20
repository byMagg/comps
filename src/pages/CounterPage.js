import useCounter from "../hooks/useCounter";
import Button from "../components/Button"
import Panel from "../components/Panel"
import { useReducer, useState } from "react";

const reducer = (state, action) => {
    return {
        ...state,
        count: state.count + 1
    };
};

function CounterPage({ initialCount }) {
    const { setCount, handleClick } = useCounter(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // setCount(prev => prev + valueToAdd);
        // setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={handleClick}>
                    Increment
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;