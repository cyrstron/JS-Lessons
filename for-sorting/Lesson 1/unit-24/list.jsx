import React from 'react';

const animals = ['Rabbit', 'Wolf', 'Pig', 'Dog'];

const AnimalsList = () => {
    return (
        <ul>
            {animals.map((animal) => (
                <li key={animal}>{animal}</li>
            ))}
        </ul>
    )
}

