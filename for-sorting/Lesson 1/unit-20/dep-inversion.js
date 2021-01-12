class XhrHttpConnection {
    request(method, url, body, onLoad) {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.send(body);

        xhr.addEventListener('load', onLoad);
    }
}

class FetchHttpConnection {
    request(method, url, body) {
        return fetch(url, {
            method, 
            body
        });
    }
}

class UserModel {
    constructor(httpConnection) {
        this.httpConnection = httpConnection;
    }

    createUser(user) { 
        // Callback or promise?

        return this.httpConnection('POST', '/users', user);
    }
}

class XhrHttpConnection {
    request(method, url, body) {
        return new Promise((res, rej) => {
            const xhr = new XMLHttpRequest();  
            xhr.open(method, url, isSync);            
            xhr.send(body);            
            xhr.addEventListener('load', () => {
                if (xhr.status != 200) {
                    rej(xhr.response);
                } else {
                    res(xhr.response);
                }
            });
        });
    }
}

class FetchHttpConnection {
    request(method, url, body) {
        return fetch(url, {method, body})
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                } else {
                    return res.text();
                }
            });
    }
}

class UserModel {
    constructor(httpConnection) {
        this.httpConnection = httpConnection;
    }

    createUser(user) { 
        // We don't care what's inside!
        return this.httpConnection('POST', '/users', user);
    }
}
