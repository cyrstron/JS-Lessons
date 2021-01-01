const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (hasError) {
            resolve('value');
        } else {
            reject('error')
        }
    }, 1000);
});

promise
    .then((value) => {
        console.log(value); // 'value'
    })
    .catch((error) => {
        console.error(error); // 'error'
    });
