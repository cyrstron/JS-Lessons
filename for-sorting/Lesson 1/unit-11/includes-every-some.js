const hasElem1 = [1, 2, 3, 4, 5].includes(3); // true
const hasElem2 = [1, 2, 3, 4, 5].includes(10); // false

const areAllPositive = [1, 2, 3, 4, 5]
    .every((elem) => elem > 0); // true
const areAllEven = [1, 2, 3, 4, 5]
    .every((elem) => !(elem % 2)); // false

const hasOdds = [1, 2, 3, 4, 5]
    .some((elem) => elem % 2); // true    
const hasNegatives = [1, 2, 3, 4, 5]
    .some((elem) => elem < 0); // false
