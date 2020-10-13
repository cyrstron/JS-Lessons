const array = [1, 2, 3, 4, 5];

const index1 = array.indexOf(2); // 1
const index1 = array.indexOf(10); // -1

const elem = array.find((elem) => {
    return elem === 2;
}); // 2
const elem = array.find((elem) => {
    return elem === 10;
}); // undefined

const elem = array.findIndex((elem) => {
    return elem === 2;
}); // 1
const elem = array.find((elem) => {
    return elem === 10;
}); // -1
