let anyVal: any;

anyVal = 1;
anyVal = '1';
anyVal = {};

const numValue = 1;

const apiResponse: unknown = getSomeApiResource();

if (typeof numValue === 'number') {
    console.log(numValue * 2);
} else {
    console.log(numValue * 2); // never * 2
}

function sayHi(): void {
    console.log('Hi!');
}

function getSomeApiResource() {
    
}