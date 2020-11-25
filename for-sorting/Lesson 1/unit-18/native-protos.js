console.log([].__proto__ === Array.prototype); // true
console.log([].__proto__.__proto__ === Object.prototype); // true
console.log([].__proto__.__proto__.__proto__); // null

console.log(5..__proto__ === Number.prototype); // true
console.log(5..__proto__.__proto__ === Object.prototype); // true
console.log(5..__proto__.__proto__.__proto__); // null

Number.prototype.decrement = function () {
    return this - 1;
}

console.log(5..decrement()); // 4

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (func) {
        for (let i; i < this.length; i++) {
            func(this[i], i, this);
        }
    }
}
