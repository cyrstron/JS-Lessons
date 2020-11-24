function sum(a, b) {
    return a + b;
}

console.log(sum.name); // 'sum'
console.log(sum.length); // 2

function makeCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
