import React, { useRef, useEffect } from 'react';
import propTypes from './props';

import style from './style.module.css';

MInMax.propTypes = propTypes;

function MInMax({ max, min, current, onChange }) {
  let inp = useRef();

  function applyCuurent(num) {
    let validNum = Math.max(min, Math.min(num, max));
    inp.current.value = validNum;
    onChange(validNum);
  }

  function parseCurrentStr() {
    let num = parseInt(inp.current.value);
    applyCuurent(isNaN(num) ? min : num);
  }

  function onKeyPress(e) {
    if (e.keyCode == 13) parseCurrentStr(e);
  }

  let inc = () => applyCuurent(current + 1);
  let dec = () => applyCuurent(current - 1);

  useEffect(() => {
    inp.current.value = current;
  }, [current]);

  return (
    <div>
      <button className="btn  btn-warning" type="button" onClick={dec}>
        -
      </button>
      <input
        ref={inp}
        type="text"
        className={style.inp}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyDown={onKeyPress}
      />
      <button className="btn btn-success" type="button" onClick={inc}>
        +
      </button>
    </div>
  );
}
export default MInMax;
