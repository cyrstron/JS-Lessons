import React, { useCallback, useRef } from 'react';

const UserForm = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const onSubmit = useCallback(() => {
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;

        console.log(`${firstName} ${lastName}`);
    }, []);

    return (
        <form onSubmit={onSubmit}>
            <label>
                First Name:
                <input ref={firstNameRef} />
            </label>
            <label>
                Last Name:
                <input ref={lastNameRef} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

import React, { useCallback, useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onFirstNameChange = useCallback((e) => {
        setFirstName(e.target.value);
    }, [setFirstName]);

    const onLastNameChange = useCallback((e) => {
        setLastName(e.target.value);
    }, [setLastName])

    const onSubmit = useCallback(() => {
        console.log(`${firstName} ${lastName}`);
    }, [firstName, lastName]);

    return (
        <form onSubmit={onSubmit}>
            <label>
                First Name:
                <input value={firstName} onChange={onFirstNameChange} />
            </label>
            <label>
                Last Name:
                <input value={lastName} onChange={onLastNameChange} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}
