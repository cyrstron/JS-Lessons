const array = [1, 2, 3, 4, 5];

let i = 0;

while (i < array.length) {
    console.log(array[i]); // 1, 2, 3, 4, 5

    i += 1;
}

for (let i = 0; i < array.length; i += 1) {
    console.log(array[i]); // 1, 2, 3, 4, 5
}
