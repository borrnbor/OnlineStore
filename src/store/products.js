import { makeAutoObservable, runInAction } from 'mobx';

export default class Products {
  products = [];

  async load() {
    let products = await this.api.all();

    runInAction(() => {
      this.products = products;
    });
  }

  get getProduct() {
    return (id) => this.products.find((item) => item.id == id);
  }

  constructor(rootStore) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
    this.api = this.rootStore.api.productsApi;
  }
}
