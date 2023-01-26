import Cart from './cart';
import Order from './order';
import Products from './products';

import * as cartApi from '../api/cart';
import * as productsApi from '../api/products';

export default class RootStore {
  constructor() {
    this.storage = window.localStorage;

    this.api = { cartApi, productsApi };

    this.products = new Products(this);
    this.cart = new Cart(this);
    this.order = new Order(this);
  }
}
