import FormControl from "react-bootstrap/FormControl";
import React from "react";

const FieldInput = ({ input, className, autoComplete, type, size }) => {
  return (
    <FormControl
      name={input.name}
      className={className}
      type={type}
      placeholder={input.name}
      autoComplete={autoComplete}
      value={input.value}
      onChange={input.onChange}
      size={size}
    />
  );
};
export default FieldInput;
