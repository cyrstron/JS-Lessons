import React, { useCallback, useState } from 'react';

const Page = () => {
    return (
        <div>
            <UserForm/>
        </div>
    );
}

const UserForm = () => {
    const [userName, setUserName] = useState('');

    const onChange = useCallback((e) => {
        const {value} = e.target;

        setUserName(value);
    }, [setUserName]);

    return (
        <label>
            Username:
            <input 
                onChange={onChange} 
                value={userName}
            />
        </label>
    );
}

import React, { useCallback, useState } from 'react';

const Page = () => {
    const [userName, setUserName] = useState('');

    return (
        <div>
            <Greeting userName={userName} />
            <UserForm userName={userName} setUserName={setUserName} />
        </div>
    );
}

const Greeting = ({userName}) => {
    return <div>Hi, {userName}</div>;
}

const UserForm = ({userName, setUserName}) => {
    const onChange = useCallback((e) => {
        const {value} = e.target;

        setUserName(value);
    }, [setUserName]);

    return (
        <label>
            Username:
            <input 
                onChange={onChange} 
                value={userName}
            />
        </label>
    );
}
