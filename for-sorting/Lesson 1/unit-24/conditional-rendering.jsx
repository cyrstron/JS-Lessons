import React, { useCallback, useState } from 'react';

const Warning = ({message}) => {
    if (!message) return null;

    return (
        <div>{message}</div>
    );
}

const CountdownBtn = () => {
    const [count, setCount] = useState(10);

    const onClick = useCallback(() => {
        setCount(count--);
    }, [count, setCount]);

    if (count === 0) {
        return (
            <div>No clicks left :(</div>
        )
    };

    return (
        <div>
            <Warning message={count === 1 && 'LAST CLICK LEFT!'} />
            <button onClick={onClick}>
                Clicks left: {count}
            </button>
        </div>
    );
}
