import React from "react";

function InputField({ ...rest }) {
  return (
    <input type="text" {...rest} />
  );
}

export default InputField;
