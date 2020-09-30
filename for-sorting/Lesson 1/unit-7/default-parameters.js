function greetUserDefault1(user, greeting) {
    if (!greeting) {
        greeting = 'Hello'
    }

    alert(`${greeting}, ${user}!`);
}

function greetUserDefault2(user, greeting) {
    greeting = greeting || 'Hello'; // or greeting ?? 'Hello'

    alert(`${greeting}, ${user}!`);
}

function greetUserDefault3(user, greeting = 'Hello') {
    alert(`${greeting}, ${user}!`);
}

greetUserDefault1('Vasya'); // Hello, Vasya!
greetUserDefault2('Vasya'); // Hello, Vasya!
greetUserDefault3('Vasya'); // Hello, Vasya!

function greetUserDefault4(
    user, 
    greeting = prompt('Choose greeting.', ''),
) {
    alert(`${greeting}, ${user}!`);
}

greetUserDefault4('Vasya');
