import { useEffect, useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count)
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return { count, setCount, handleClick };
}

export default useCounter;