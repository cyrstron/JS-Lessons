splice(startIndex, deleteCount, elem1, elem2, ...etc);

const array1 = [1, 2, 3, 4, 5];

delete array1[2];

console.log(array1); // [1, 2, , 4, 5]
console.log(array1.length); // 5

const array2 = [1, 2, 3, 4, 5, 6];

// Удалить 3 елемента с позиции 1
const values = array2.splice(1, 3); 

console.log(values); // [2, 3, 4]
console.log(array2); // [1, 5, 6]

// Удалить 1 элемент с позиции 1
// И вставить вместо него элементы '1', '2', '3' 
const values = array2.splice(1, 1, '1', '2', '3'); 

console.log(values); // [5]
console.log(array2); // [1, '1', '2', '3', 6]
