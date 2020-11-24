function factorial(num) {
    if (num < 1 || num % 1) throw new Error('Invalid argument!');

    let result = 1;

    while (num) {
        result *= num;

        num--;
    }
}

try {
    factorial(-1);
} catch (error) {
    console.log(error.message); // Invalid argument!
} finally {
    console.log('Done!');
}
