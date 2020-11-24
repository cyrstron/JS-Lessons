const timerId = setTimeout(function () {

}, /* delay in ms */);

setTimeout(function () {
    console.log('Hi!');
}, 1000);

// Wait for it...

// Hi!

const greetingTimerId = setTimeout(function () {
    console.log('Hello!')
});

clearTimeout(greetingTimerId);

// ...
