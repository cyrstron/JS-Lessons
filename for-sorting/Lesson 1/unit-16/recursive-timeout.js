function countWithInterval(from, to) {
    setTimeout(function () {
        console.log(from);

        const nextValue = from + 1;

        if (nextValue > to) return;

        countWithInterval(nextValue, to);
    }, 1000);
}

countWithInterval(1, 5);
