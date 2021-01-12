import React from 'react';

const Articles = ({
    isLoading,
    articles,
    error,
}) => {
    return (
        <section className='articles'>
            {isLoading && <Spinner />}
            {error && <ErrorMsg message={error.message} />}
            {articles ? articles.map((article) => (
                <Article 
                    key={article.id}
                    {...article}
                />
            )) : null}
        </section>
    );
}
