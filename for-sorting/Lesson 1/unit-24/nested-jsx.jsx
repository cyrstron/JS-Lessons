import React from 'react';
import ReactDOM from 'react-dom';

const article = (
    <article className='container'>
        <h1 className='heading'>
            Some article
        </h1>
        <p className='content'>
            Lorem, Ipsum, etc. 
        </p>
    </article>
);

ReactDOM.render(
    article, 
    document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';

const article = (
    React.createElement('article', {className: 'container'}, 
        [            
            React.createElement(
                'h1', 
                {className: 'heading'}, 
                'Some article'
            ), 
            React.createElement(
                'p', 
                {className: 'content'}, 
                'Lorem, Ipsum, etc.'
            ),
        ]
    )
);

ReactDOM.render(
    article, 
    document.getElementById('root'),
);

