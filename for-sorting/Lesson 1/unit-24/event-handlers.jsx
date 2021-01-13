import React, { useCallback } from 'react';

const Button = () => {
    const onBtnClick = useCallback(() => {
        console.log('btn click!');
    }, []);

    const onLinkClick = useCallback((e) => {
        e.preventDefault();

        console.log('link click!');
    }, []);

    return (
        <div>
            <button onClick={onBtnClick}>
                Click!
            </button>
            <a 
                href='http://www.google.com' 
                onClick={onLinkClick}
            >
                Google!
            </a>
        </div>
    );
}
