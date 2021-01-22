import React from 'react';

const FancyBorder = ({children}) => {
    return (
        <div className='fancy-class'>
            {children}
        </div>
    );
}

const Warning = ({message}) => {
    return (
        <FancyBorder>
            <h1>Warning!</h1>
            <p>{message}</p>
        </FancyBorder>
    );
}
