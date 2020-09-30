if (true) {
    var value1 = 'var';
    let value2 = 'let';
}

console.log(value1); // 'var'
console.log(value2); // Error!

for (var i = 0; i < 3; i += 1) {};

console.log(i); // 3

for (let j = 0; j < 3; j += 1) {};

console.log(j); // Error!
