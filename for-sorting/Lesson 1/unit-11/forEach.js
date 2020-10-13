const array = [1, 2, 3, 4, 5];

array.forEach((elem, index, sourceArray) => {
    console.log(elem); // 1, 2, 3, 4, 5
    console.log(index); // 0, 1, 2, 3, 4
    console.log(sourceArray); // [1, 2, 3, 4, 5]
});

