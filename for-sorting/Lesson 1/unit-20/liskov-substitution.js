class Customer {
    cart = [];

    constructor(http, id, userName) {
        this._http = http;
        this.id = id;
        this.userName = userName;
    }

    buy() {
        return this._http.buyPurchases(this.id, this.cart);
    }
}

class GoldCustomer extends Customer {
    constructor(http, id, userName) {
        super(http, id, userName);

        this.discount = 0.1;
    }

    buyWithDiscount(purchases) {
        return this._http.buyPurchases(this.id, purchases, {
            discount: this.discount,
        });
    }

    buy() {
        console.log('You have a discount! Feel free to use it!');
    }
}
