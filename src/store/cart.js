import { makeAutoObservable, runInAction } from 'mobx';

const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default class Cart {
  items = [];
  inProcess = [];
  #token = null;

  load = async () => {
    let curToken = this.rootStore.storage.getItem('CART__TOKEN');
    let { cart, token, needUpdate } = await this.api.load(curToken);
    if (needUpdate) {
      this.rootStore.storage.setItem('CART__TOKEN', token);
    }

    runInAction(() => {
      this.items = cart;
      this.#token = token;
    });
  };

  get itemsDetailed() {
    return this.items.map((item) => {
      let details = this.rootStore.products.getProduct(item.id);
      return { ...details, ...item };
    });
  }

  get total() {
    return this.itemsDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
  }

  inCart = (id) => {
    return this.items.some((item) => item.id == id);
  };

  inProcessId = (id) => {
    return this.inProcess.some((el) => el == id);
  };

  change = async (id, cnt) => {
    let item = this.items.find((pr) => pr.id == id);
    if (item !== undefined) {
      let details = this.itemsDetailed.find((item) => item.id == id);
      cnt = Math.max(1, Math.min(details.rest, cnt));
      let res = await this.api.change(this.#token, id, cnt);
      if (res) {
        runInAction(() => {
          item.cnt = cnt;
        });
      }
    }
  };

  add = async (id) => {
    if (!this.inCart(id) && !this.inProcessId(id)) {
      runInAction(() => {
        this.inProcess.push(id);
      });
      let res = await this.api.add(this.#token, id);
      if (res) {
        runInAction(() => {
          this.items.push({ id, cnt: 1 });
        });
      }
      runInAction(() => {
        this.inProcess = this.inProcess.filter((el) => el != id);
      });
    }
  };

  remove = async (id) => {
    if (this.inCart(id) && !this.inProcessId(id)) {
      runInAction(() => {
        this.inProcess.push(id);
      });
      let res = await this.api.remove(this.#token, id);
      if (res) {
        runInAction(() => {
          this.items = this.items.filter((item) => item.id != id);
        });
      }
      runInAction(() => {
        this.inProcess = this.inProcess.filter((el) => el != id);
      });
    }
  };

  clean = async () => {
    await fetch(`${BASEURL}clean.php?token=${this.#token}`);
    let response = await fetch(`${BASEURL}load.php?token=${this.#token}`);
    let { cart } = await response.json();
    runInAction(() => {
      this.items = cart;
    });
  };

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.api = this.rootStore.api.cartApi;
  }
}
