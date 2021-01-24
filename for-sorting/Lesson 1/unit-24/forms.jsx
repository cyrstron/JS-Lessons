import React, { useCallback, useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 

    const onFirstNameChange = useCallback((e) => {
        setFirstName(e.target.value);
    }, [setFirstName]);

    const onLastNameChange = useCallback((e) => {
        setLastName(e.target.value);
    }, [setLastName]);

    const onReset = useCallback((e) => {
        e.preventDefault();
        
        setFirstName('');
        setLastName('');
    }, [setFirstName, setLastName]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        console.log('User Created:');
        console.log(`${firstName} ${lastName}`);
        onReset();
    }, [firstName, lastName, onReset]);

    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <div>
                First Name:
                <input value={firstName} onChange={onFirstNameChange}/>
            </div>
            <div>
                Last Name:
                <input value={lastName} onChange={onLastNameChange}/>
            </div>
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
        </form>
    )
}
