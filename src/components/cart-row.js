import React from 'react';
import MinMax from './MinMax/index';

function CartRow({ num, id, cnt, rest, price, title, onChange, onRemove }) {
  let remove = () => onRemove(id);
  let change = (cnt) => onChange(id, cnt);
  let setMax = () => onChange(id, rest);

  return (
    <tr>
      <td>{num}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <MinMax max={rest} min={1} current={cnt} onChange={change} />
      </td>
      <td>{cnt * price}</td>
      <td>
        <button type="button" onClick={remove}>
          х
        </button>
        <button type="button" onClick={setMax}>
          Max
        </button>
      </td>
    </tr>
  );
}

export default React.memo(CartRow);
