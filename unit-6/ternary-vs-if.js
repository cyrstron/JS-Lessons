const isVasya = confirm('Are you Vasya?');

const greeting = isVasya ? 'Hi Vasya!' : 'Hi not Vasya!'; // OK

function getGreeting(isVasya) {
    return isVasya ? 'Hi Vasya!' : 'Hi not Vasya!'; // OK
}

isVasya ? alert('Hi Vasya!') : alert('Hi not Vasya!'); // NOT OK

if (isVasya) {
    alert('Hi Vasya!')
} else {
    const name = prompt('Who are you then?', '');

    alert(`Hi ${name}!`);
} // OK
