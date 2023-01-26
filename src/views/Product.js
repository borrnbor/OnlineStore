import React from 'react';

import E404 from './E404';

import useStore from '../hooks/useStore';

import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer(Product);

function Product() {
  let { id } = useParams();
  let [productsStore, cartStore] = useStore('products', 'cart');
  let product = productsStore.getProduct(id); //правильно

  if (!/^[1-9]+\d*$/.test(id) || product === undefined) {
    return <E404 />;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <hr />
      <div>
        <strong>Price: {product.price}</strong>
      </div>
      <hr />
      <Link to="/">Catalog</Link>
      <hr />
      {cartStore.inCart(product.id) ? (
        <button
          type="button"
          className={`btn btn-danger`}
          onClick={() => cartStore.remove(product.id)}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => cartStore.add(product.id)}
        >
          Add
        </button>
      )}
    </div>
  );
}
