import { makeAutoObservable } from 'mobx';

class CartStore {
    cartCount = 0;
    items = [];
    totalPrice = 0;

    constructor() {
        makeAutoObservable(this);
    }

    addToCart(item) {
        this.cartCount = this.items.length;
        this.items.push(item)
        this.totalPrice = this.items.reduce((accumulator, object) => {
            return accumulator + object.price;
          }, 0);
    }
}

export default new CartStore();