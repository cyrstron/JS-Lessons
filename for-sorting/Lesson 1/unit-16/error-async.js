try {
    setTimeout(() => {
        throw new Error('Catch me!');
    }, 0);
} catch (err) {
    console.log(err);
}

// Uncaught Error!
