setTimeout(() => {
    console.log('World!')
}, 0);

Promise.resolve('Hello')
    .then((greeting) => {
        console.log(greeting);
    });

setTimeout(() => {
    Promise.resolve('World')
        .then((greeting) => {
            console.log(greeting)
        });
    }, 0);
    
Promise.resolve('Hello')
    .then((greeting) => {
        setTimeout(() => {
            console.log(greeting);
        }, 0);
    });
