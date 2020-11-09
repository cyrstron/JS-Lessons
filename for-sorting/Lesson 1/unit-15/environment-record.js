const users = [
    {id: 1, firstName: 'Vasya', lastName: 'Ivanov'},
    {id: 2, firstName: 'Vanya', lastName: 'Vasilyev'},
    {id: 3, firstName: 'Albert', lastName: 'Einstein'},
]

function getUser(id) {
    const user = users.find((user) => user.id === id);

    return user ?? null;
}

function createGreeter(id) {
    const greeting = 'Hello';
    const defaultTitle = 'Anonymous'

    function getUserTitle() {
        const user = getUser(id);

        return user ? `${user.firstName} ${user.lastName}` : defaultTitle;
    }

    return function () {
        const userTitle = getUserTitle();

        console.log(`${greeting}, ${userTitle}`);
    }
}

const greet = createGreeter(2);

greet();
