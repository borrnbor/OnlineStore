import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Result);

function Result() {
  let [order] = useStore('order');

  return (
    <div>
      <h1>{order.orderData.name}, your order is Done!</h1>
      <hr />
      <strong>Total: {order.lastOrderCache}</strong>
    </div>
  );
}
