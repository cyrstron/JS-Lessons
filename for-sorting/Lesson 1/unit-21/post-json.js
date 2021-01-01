const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://async-demo.herokuapp.com/objects');

xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

const body = JSON.stringify({
    firstName: 'Vasya',
    lastName: 'Ivanov',
});

xhr.send(body);

xhr.addEventListener('load', () => {    
    if (xhr.status !== 201) {
        console.error(xhr.response);
        return;
    }

    try {
        const received = JSON.parse(xhr.response);
        console.log(received); // {id: 0, firstName: 'Vasya', lastName: 'Ivanov'}
    } catch (err) {
        console.error(err);
    }
});
