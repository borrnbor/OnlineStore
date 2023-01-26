import React from 'react';
import CartRow from '../components/cart-row';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link } from 'react-router-dom';

export default observer(Cart);

function Cart() {
  let [cartStore] = useStore('cart', 'products');
  let { total, remove, change } = cartStore;

  let products = cartStore.itemsDetailed;
  return (
    <div>
      <h1>Cart</h1>
      <hr />
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {products.map((pr, i) => (
            <CartRow
              key={pr.id}
              num={i + 1}
              {...pr}
              onChange={change}
              onRemove={remove}
            />
          ))}
        </tbody>
      </table>
      <strong>Total: {total}</strong>
      <hr />
      <Link className="btn btn-primary" to="/order">
        Move To Order
      </Link>
    </div>
  );
}
