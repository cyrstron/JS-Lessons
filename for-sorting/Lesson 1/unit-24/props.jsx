import React from 'react';
import ReactDOM from 'react-dom';

const Article = (props) => {
    const {className, title, children} = props;

    return (
        <article className={`container ${className}`}>
            <h1 className='heading'>{title}</h1>
            {children}
        </article>
    )
}

const Page = () => {
    return (
        <Article
            className='article' 
            title='New title'
        >
            <p>New article</p>
        </Article>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));
