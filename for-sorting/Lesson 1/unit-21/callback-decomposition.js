
const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}

postUser(user, (err, response) => {
        if (err) {
            handleError(err);
            return;
        }

        const {id} = response;
        const extension = {occupation: 'CEO'};

        extendUser(id, extension, (err) => {
            if (err) {
                handleError(err);
                return;
            }                
            deleteUser(id, (err) => {
                if (error) {
                    handleError(err);
                } else {
                    console.log('DONE!')
                }
            });
        });
    }
);

function sendJSON(method, url, body, {headers = {}, ...options} = {}, callback) {    
    sendRequest(method, url, {
        ...options,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
            ...headers
        } 
    }, callback);
}

function postUser(user, callback) {
    sendJSON('POST', 'https://async-demo.herokuapp.com/objects', user, null, callback);
}

function extendUser(id, extension, callback) {
    sendJSON('PATCH', `https://async-demo.herokuapp.com/objects/${id}`, extension, null, callback);
}

function deleteUser(id, callback) {
    sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}`, null, callback);
}

function handleError(err) {
    console.error(err);
}