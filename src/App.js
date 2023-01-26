import React from 'react';

import { Link } from 'react-router-dom';

import CartStat from './components/cart';

import RouterView from './routes';

export default function () {
  return (
    <>
      <header>
        <div className="container mt-1">
          <div className="row justify-content-between">
            <div className="col">Logo</div>
            <div className="col">
              <CartStat />
            </div>
          </div>
        </div>
        <hr />
      </header>
      <div>
        <div className="container">
          <div className="row">
            <aside className="col col-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/cart">Cart</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/order">Order</Link>
                </li>
              </ul>
            </aside>
            <main className="col col-9">
              <RouterView />
            </main>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mt-1">
        <footer className="mt-1">
          <div className="container">2022</div>
        </footer>
      </div>
    </>
  );
}
