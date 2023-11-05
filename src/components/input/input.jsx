import React from "react";

function InputHolder({ type, placeholder, id, value, handleChange, className}) {

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={value}
        id={id}
        className={className}
      />
    </div>
  );
}

export default InputHolder;
