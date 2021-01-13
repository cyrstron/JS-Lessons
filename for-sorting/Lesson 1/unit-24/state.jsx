import React, { useCallback, useState } from 'react';

const CounterBtn = () => {
    const [count, setCount] = useState(0);

    const onClick = useCallback(() => {
        setCount(count++)
    }, [count, setCount]);

    return (
        <button onClick={onClick}>
            Clicked: {count}
        </button>
    )
}
