const value = 123 && true && ''; // ''
const value = true && null && false; // null

const isModerator = true;
const hasWritePermission = true;

if (isModerator && hasWritePermission) {
    // Do some work
}

hasWritePermission && alert('Has permission!');
