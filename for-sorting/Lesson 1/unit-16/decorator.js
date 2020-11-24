function cacheDecorator(func) {
    const cache = {};

    return function (value) {
        if (cache[value]) return cache[value];

        const result = func(value);
        cache[value] = result;

        return result;
    }
}

function fib(num) {
    // ... 
    // code for evaluating 
    // fibonacci number
}

const cachedFib = cacheFunc(fib);

const num1 = cachedFib(100); // long evaluation
const num2 = cachedFib(100); // cache usage
