function sum(a, b) {
    return a + b;
}

function sumAll(...values) {
    return values.reduce((sum, value) => sum + value);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

function calc(op, ...values) {
    switch(op) {
        case '+':
            return values.reduce((sum, value) => sum + value);
        case '*':
            return values.reduce((sum, value) => sum * value);
        default:
            return NaN;
    }
}

console.log(calc('+', 1, 2, 3, 4, 5)); // 15

const arr = [10, 2, 5, 1, 99];

console.log(Math.min(...arr)); // 1
console.log(Math.min(45, ...arr, 12)); // 1
