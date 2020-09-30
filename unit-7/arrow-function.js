const sayHi = () => alert('Hi!');

const double = a => a * 2;

const sum = (a, b) => a + b;

const mul = (a, b) => {
    return a * b;
}

const pow = (a, b) => {
    let result = 1;

    for (let i = 1; i <= b; i += 1) {
        result *= a;
    }

    return a;
}
