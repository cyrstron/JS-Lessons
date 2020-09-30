const value = '' || false || 123; // 123
const value = '' || true || 123; // true

const isAdmin = false;
const isModerator = true;

if (isAdmin || isModerator) {
    // Do some work
}

let name;

const currentUserName = name || 'Anonymous'; // 'Anonymous'
