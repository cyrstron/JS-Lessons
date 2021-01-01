class Cart {
    _purchases = [];
    
    constructor(httpTransport, owner) {
        this._http = httpTransport;
        this._owner = owner;
    }

    _showSuccessMessage(msg) {
        console.log(msg);
    }

    _showErrorMessage(err) {
        console.error(err);
    }

    async buy() {
        if (!this._purchases.length) {
            throw Error('No purchases added!');
        }

        try {
            await this.http.post({
                purchases: this._purchases, 
                buyer: this._owner,
            });

            this._showSuccessMessage('Purchases have been bought!');

            this._purchases = [];

        } catch (err) {
            this._showErrorMessage(err.message);
        }
    }
}

class NotificationService {
    showSuccessMessage(msg) {
        console.log(msg);
    }

    showErrorMessage(err) {
        console.error(err);
    }
}

class Cart {
    _purchases = [];
    
    constructor(httpTransport, owner) {
        this._notifications = new NotificationService()
        this._http = httpTransport;
        this._owner = owner;
    }

    async buy() {
        if (!this._purchases.length) {
            throw Error('No purchases added!');
        }

        try {
            await this.http.post({
                purchases: this._purchases, 
                buyer: this._owner,
            });

            this._notifications.showSuccessMessage('Purchases have been bought!');

            this._purchases = [];

        } catch (err) {
            this._notifications.showErrorMessage(err.message);
        }
    }
}
