const tsObj = { 
    width: 10, 
    height: 15,
};

// Property 'heigth' does not exist on type 
// '{ width: number; height: number; }'. 
// Did you mean 'height'?
const tsArea = tsObj.width * tsObj.heigth;

// The right-hand side of an arithmetic 
// operation must be of type 'any', 'number', 'bigint' 
// or an enum type.
console.log(4 / []);
