const isVasya = confirm('Are you Vasya?');

if (isVasya) alert('Hello Vasya!');

const isVanya = confirm('Are you Vanya?')

if (isVanya) {
    alert('Hi Vanya!');
    alert('Where\'s Vasya?');
}

const age = prompt('How olf are you?', '18');

if (age > 18) {
    alert('Hi, mister!');
}

const applesNumber = 0;

if (applesNumber) {
    alert('Could you give me an apple?');
}

if (isVasya) {
    alert('Hello Vasya!');
} else {
    alert('Hello Anonymous!');
}

if (isVasya) {
    alert('Hello Vasya!');
} else if (isVanya) {
    alert('Hello Vanya!');
} else {
    alert('Hello Anonymous!');
}

if (isVasya) {
    const isAdmin = confirm('Are you admin?');

    if (isAdmin) {
        alert('Hello admin Vasya!');
    } else {
        alert('Hello just Vasya!');
    }
} else {
    const isAdmin = confirm('Are you admin?');

    if (isAdmin) {
        alert('Hello unknown admin!');
    } else {
        alert('Hello Anonymous!');
    }
}

const isAdmin = confirm('Are you admin?');

if (isVasya && isAdmin) {
    alert('Hello admin Vasya!');
} else if (isVasya) {
    alert('Hello just Vasya!');
} else if (isAdmin) {
    alert('Hello unknown admin!');
} else {
    alert('Hello Anonymous!');
}
