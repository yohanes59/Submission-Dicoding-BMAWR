import React from 'react';

function ActionButton({ desc, ...rest }) {
  return (
    <button {...rest}>{desc}</button>
  )
}

export default ActionButton;