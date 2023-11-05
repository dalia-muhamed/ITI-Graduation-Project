import React from "react";

function InputHolder({ type, placeholder, id, value, handleChange, className, name}) {

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={value}
        id={id}
        className={className}
        name= {name}
      />
    </div>
  );
}

export default InputHolder;
