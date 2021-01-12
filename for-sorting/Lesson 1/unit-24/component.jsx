import React from 'react';
import ReactDOM from 'react-dom';

const Article = ({className, title, content}) => {
    return (
        <article className={`container ${className}`}>
            <h1 className='heading'>
                {title}
            </h1>
            {content}
        </article>
    )
}

ReactDOM.render(
    <Article
        className='article' 
        title='New title'
        content={(
            <p>
                New article
            </p>
        )}
    />, 
    document.getElementById('root'),
);
