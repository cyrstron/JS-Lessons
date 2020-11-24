let i = 1;

setInterval(function () {
    console.log(i++);
}, 100);

let j

setTimeout(function count() {
    console.log(j++);

    setTimeout(count, 100);
}, 100);
