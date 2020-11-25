const arrProto = Object.getPrototypeOf([]);

console.log(arrProto === Array.prototype); // true

const obj = {0: 1, 1: 2, 2: 3, length: 3};

Object.setPrototypeOf(obj, arrProto);

obj.forEach((item) => {
    console.log(item); // 1, 2, 3
});

const newProto = Object.create(arrProto);

newProto.sayHi = function () {
    console.log('Hi!');
}

const newObj = {0: 1, 1: 2, 2: 3, length: 3};

Object.setPrototypeOf(newObj, newProto);

newObj.sayHi(); // Hi!

newObj.forEach((item) => {
    console.log(item); // 1, 2, 3
});
