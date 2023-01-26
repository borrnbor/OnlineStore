import React from 'react';

import Cart from './views/Cart';
import Result from './views/Result';
import Order from './views/Order';
import E404 from './views/E404';
import Home from './views/Home';
import Product from './views/Product';

import { Routes, Route } from 'react-router-dom';

export default function () {
  return (
    <Routes>
      <Route path="/product/:id" element={<Product />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
}
