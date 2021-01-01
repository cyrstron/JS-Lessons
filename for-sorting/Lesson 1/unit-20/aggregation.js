class Cart {
    _purchases = [];
    
    constructor(owner) {
        this._owner = owner;
    }

    async buy() {
        if (!this._purchases.length) {
            throw Error('No purchases added!');
        }

        const res = await fetch('/someurl', {
            method: 'POST',
            body: this._purchases,
        });

        if (!res.ok) throw Error(res.statusText);

        const result = await response.json();

        this._purchases = [];

        return result;
    }
}

class HttpService {
    /*...*/
    
    async post(url, body) {
        const res = await fetch(url, {
            method: 'POST',
            body,
        });
        
        if (!res.ok) throw Error(res.statusText);
        
        const result = await response.json();

        return result;
    }
}

class Cart {
    _purchases = [];
    
    constructor(http, owner) {
        this._http = http;
        this._owner = owner;
    }

    async buy() {
        if (!this._purchases.length) {
            throw Error('No purchases added!');
        }

        const result = await this.http.post('/someurl', this._purchases);

        this._purchases = [];

        return result;
    }
}
