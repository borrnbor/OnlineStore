import { makeAutoObservable } from 'mobx';

export default class Order {
  lastOrderCache = null;

  order = [
    {
      label: 'Your e-mail',
      value: '',
      name: 'eMail',
      textError: 'Неправильно введен e-mail',
      valid: false,
      regular: /^.+@.+\..+$/gi,
    },
    {
      label: 'Your Phone number',
      value: '',
      name: 'phone',
      textError: 'Неправильно введен номер телефона',
      valid: false,
      regular: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    },
    {
      label: 'Your Name',
      value: '',
      name: 'name',
      textError: 'Неправильно введено имя',
      valid: false,
      regular: /^[a-zA-Zа-яА-Я]+$/iu,
    },
  ];

  get formValid() {
    return this.order.every((f) => f.valid);
  }

  get orderData() {
    let res = {};

    this.order.forEach((field) => {
      res[field.name] = field.value;
    });
    return res;
  }

  change = (name, value) => {
    let field = this.order.find((f) => f.name == name);

    if (field !== undefined) {
      field.value = value;
      field.valid = field.regular.test(value);
    }
  };

  cashResult = () => {
    this.lastOrderCache = this.rootStore.cart.total;
  };

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}
