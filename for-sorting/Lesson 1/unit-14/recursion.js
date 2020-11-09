function countDown(number) {
    console.log(number);

    if (number === 1) return;

    countDown(number - 1);
}
