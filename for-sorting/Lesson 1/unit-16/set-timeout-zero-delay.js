setTimeout(function () {
    console.log('World!');
}, 0);

console.log('Hello');

// Hello
// World!

setTimeout(function () {
    console.log('World!');
}, 0);

let i = 1;

while (i < 100000) {
    i++; // some heavy work
}

console.log('Hello');

// Hello
// World!
