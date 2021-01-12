class PurchaseCollection {
    constructor({ name, imgUrl, type, price, count }) {
        this.name = name;
        this.type = type;
        this.imgUrl = imgUrl;
        this.price = price;
        this.count = count;
    }

    incrementCount() {
        this.count++;
    }

    decrementCount() {
        if (this.count < 2) return;

        this.count--;
    }

    get totalPrice() {
        return this.price * this.count;
    }
}

class Cart {
    constructor(purchases) {
        this.purchases = purchases;
    }

    get totalPrice() {
        return this.purchases.reduce((sum, {totalPrice}) => sum + totalPrice, 0);
    }

    add(purchase) {
        this.purchases.push(purchase);
    }

    incrementPurchaseCount(name) {
        const purchase = this.purchases.find((purchase) => purchase.name === name);

        purchase.incrementCount();
    }
    
    decrementPurchaseCount(name) {
        const purchase = this.purchases.find((purchase) => purchase.name === name);

        purchase.decrementCount();
    }

    remove(name) {
        this.purchases = this.purchases.filter((purchase) => purchase.name !== name);        
    }

    clear() {
        this.purchases = [];
    }

    
}

class RelatedGoods {
    /*...*/
}