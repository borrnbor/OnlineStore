import React, { useState } from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default observer(Order);

function Order() {
  let [orderForm, cartStore] = useStore('order', 'cart');
  let { order, change, formValid } = orderForm;

  let [showModal, setShowMadal] = useState(false);
  let openModal = () => setShowMadal(true);
  let closeModal = () => setShowMadal(false);

  let sendFrom = () => {
    orderForm.cashResult();
    cartStore.clean();
  };

  return (
    <div>
      <h1>Input data</h1>
      <hr />
      <form>
        {order.map((inp, i) => (
          <div className="form-group" key={i}>
            <label>{inp.label}</label>
            <input
              type="text"
              className={`form-control ${
                inp.value.length && !inp.valid ? 'border border-danger' : ''
              }`}
              value={inp.value}
              onChange={(e) => change(inp.name, e.target.value.trim())}
            />
          </div>
        ))}
      </form>
      <hr />
      <Link
        className="btn btn-warning"
        style={{ marginRight: '10px' }}
        to="/cart"
      >
        Back to Cart
      </Link>
      <button
        id="nextBtn"
        type="button"
        className="btn btn-success"
        disabled={!formValid}
        onClick={openModal}
      >
        Go to Result
      </button>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Check data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>e-Mail:{order[0].value}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Link className="btn btn-success" to="/result" onClick={sendFrom}>
            Send order
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
