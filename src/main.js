import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import StoreContext from './context/store';
import RootStore from './store';

const store = new RootStore();
store.cart.load();
store.products.load().then(() => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.querySelector('.app')
  );
});
