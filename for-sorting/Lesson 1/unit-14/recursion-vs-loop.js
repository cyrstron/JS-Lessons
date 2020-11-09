function powLoop(num, power) {
    let result = 1;

    for (let i = 0; i < power; i += 1) {
        result *= num;
    }

    return result;
}

function powRecursive(num, power) {
    if (!power) return 1;

    return num * powRecursive(num, power - 1);
}
