function sendRequest(
    method, 
    url, 
    {body, headers = {}} = {}, 
    callback
) {
    const xhr = new XMLHttpRequest();
    
    xhr.open(method, url);

    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });

    xhr.send(body);
    
    xhr.addEventListener('load', () => {
        if ([200, 201, 204].includes(xhr.status)) {
          callback(xhr.response);
        } else {
          callback(null, xhr.response);
        }
    });
}

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects', {
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        } 
    }, (err, response) => {
        if (error) {
            console.error(err);
            return;
        }

        const {id} = response;
        const extension = {occupation: 'CEO'};

        sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}`, {
                body: JSON.stringify(extension),
                headers: {
                    'Content-type': 'application/json; charset=utf-8',
                } 
            }, (err) => {
                if (error) {
                    console.error(err);
                    return;
                }                
                sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}`, null,
                    (err) => {
                        if (error) {
                            console.error(err);
                        } else {
                            console.log('DONE!')
                        }
                    }
                );
            }
        );
    }
);
