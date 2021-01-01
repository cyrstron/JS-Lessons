const intervalId = setInterval(function () {

}, /* delay in ms */);

let counter = 1;

const counterId = setInterval(function () {
    console.log(counter++);

    if (counter > 5) clearInterval(counterId);
}, 1000);

// ..., 1, ..., 2, ..., 3, ..., 4, ..., 5
