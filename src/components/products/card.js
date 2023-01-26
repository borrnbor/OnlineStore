import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

Card.propTypes = {
  product: PropTypes.object.isRequired,
  inCart: PropTypes.bool.isRequired,
  pending: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

function Card({ product, pending, onRemove, onAdd, inCart }) {
  let remove = () => onRemove(product.id);
  let add = () => onAdd(product.id);
  return (
    <div className="card">
      <div className="card-body">
        <h3>{product.title}</h3>
        <div>{product.price}</div>
        <Link to={`product/${product.id}`}>Read more</Link>
        <hr />
        {inCart ? (
          <button
            type="button"
            className={`btn btn-danger`}
            onClick={remove}
            disabled={pending}
          >
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={add}
            disabled={pending}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
