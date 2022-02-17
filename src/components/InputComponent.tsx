import React, { ChangeEventHandler } from "react";


const Input = (props: {
  labelText: string;
  onchangeHandler: ChangeEventHandler;
  inputValue: string;
}) => {
  return (
    <input
      type="text"
      aria-label={props.labelText}
      aria-required="true"
      onChange={props.onchangeHandler}
      name="name"
      data-testid="input_test"
    />
  );
};

export default Input;
