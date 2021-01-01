class Cart {

    purchases = [];

    constructor(httpTransport, owner) {
        this.http = httpTransport;
        this.owner = owner;
    }

    async buy() {
        return this.http.post({
            purchases: this.purchases, 
            buyer: this.owner,
        });
    }
}

const cart = new Cart(http, user);

function addPurchase(cart, purchase) {
    cart.purchases.push(purchase);
}

async function buyPurchases(cart) {
    if (!cart.purchases.length) throw Error('No purchases added!');

    await cart.buy();

    cart.purchases = [];
}

class Cart {
    _purchases = [];
    
    constructor(httpTransport, owner) {
        this._http = httpTransport;
        this._owner = owner;
    }

    get owner() {
        return this._owner;
    }

    add(purchase) {
        this._purchases.push(purchase);
    }

    async buy() {
        if (!this._purchases.length) {
            throw Error('No purchases added!');
        }

        await this.http.post({
            purchases: this._purchases, 
            buyer: this._owner,
        });

        this._purchases = [];
    }
}
