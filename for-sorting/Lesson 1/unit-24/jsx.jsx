import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Vasya';

const element = (
    <h1 className='greeting'>
        Hello, {name}
    </h1>
);

ReactDOM.render(
    element, 
    document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Vasya';

const header = React.createElement(
    'h1',
    {className: 'greeting'},
    `Hello, ${name}!`,
);

ReactDOM.render(
    header, 
    document.getElementById('root'),
);

