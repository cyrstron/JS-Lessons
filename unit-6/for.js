// (init; condition; op ending)
for (let i = 0; i < 10; i += 1) {
    // ... some code
}

for (let i = 0; i < 3; i += 1) {
    console.log(i); // 0, 1, 2
}

let i = 0;

for (; i < 3; i += 1) {
    console.log(i); // 0, 1, 2
}

const greeting = 'Hello!';

for (let i = 0, len = greeting; i < len; i += 1) {
    console.log(greeting[i]); // 'H', 'e', 'l', 'l', 'o', '!'
}
