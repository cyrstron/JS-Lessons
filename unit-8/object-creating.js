const obj = new Object();

obj.a = 1;

const obj1 = {};

const obj2 = {
    a: 1,
};

const obj3 = {};

obj3.a = 1;

const obj4 = {
    stringProp: 'string',
    'boolean prop': true,
    ['number' + 'Props']: 1,
    objProp: {
        a: 1,
        b: 2,
    },
    sayHi: function() {
        alert('Hi!');
    },
    sayBye() {
        alert('Bye!');
    },
};
