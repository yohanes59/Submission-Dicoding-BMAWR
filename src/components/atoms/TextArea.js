import React from "react";

function TextAreaField({ ...rest }) {
  return (
    // <div className="note-search">
    // <input
    //   type="text" {...rest}/>
    // </div>
    <textarea type="text" {...rest} />
  );
}

export default TextAreaField;
