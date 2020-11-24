const array = [1, 2, 3, 4, 5];

const doubled = array.map((elem, index, sourceArray) => {
    console.log(elem); // 1, 2, 3, 4, 5
    console.log(index); // 0, 1, 2, 3, 4
    console.log(sourceArray); // [1, 2, 3, 4, 5]

    return elem * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
