import React from 'react';
import useStore from '../hooks/useStore';

import ProductCard from '../components/products/card';

import { observer } from 'mobx-react-lite';

export default observer(Home);

function Home() {
  let [productsStore, cartStore] = useStore('products', 'cart');
  let { products } = productsStore;
  let { inCart, inProcessId, add, remove } = cartStore;

  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {products.map((pr) => (
          <div className="col col-4 mb-3" key={pr.id}>
            <ProductCard
              product={pr}
              pending={inProcessId(pr.id)}
              onRemove={remove}
              onAdd={add}
              inCart={inCart(pr.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
