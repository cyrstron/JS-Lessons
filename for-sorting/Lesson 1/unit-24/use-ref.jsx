import React, { useCallback, useRef } from 'react';

const FocusInput = () => {
    const ref = useRef();

    const onClick = useCallback(() => {
        ref.current.focus();
    }, []);

    return (
        <div>
            <input ref={ref} />
            <button onClick={onClick}>
                Focus!
            </button>
        </div>
    );
}
