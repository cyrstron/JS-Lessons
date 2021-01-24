import React, {FC, useCallback, useState, MouseEvent} from 'react';

interface UserProps {
    firstName: string;
    lastName: string;
    age: number;
}

export const User: FC<UserProps> = ({firstName, lastName, age: initialAge}) => {
    const [age, setAge] = useState<number>(initialAge);

    const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        setAge(age + 1);

        console.log(e.target); // HTMLButtonElement
    }, [age, setAge])

    return (
        <div>
            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName}</div>
            <div>Age: {age}</div>
            <button onClick={onClick}>Get older</button>
        </div>
    )
}
