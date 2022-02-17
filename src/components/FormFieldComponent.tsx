import React, { ChangeEventHandler } from "react";
import Label from "./LabelComponent";
import Input from "./InputComponent";

const FormField = (props: {
  label: string;
  labelText: string;
  changeHandler: ChangeEventHandler;
}): JSX.Element => {
  return (
    <>
      <Label label={props.label} />
      <Input
        data-testid="formfield_input"
        labelText={props.labelText}
        onchangeHandler={props.changeHandler}
        inputValue={"type here"}
      />
    </>
  );
};

export default FormField;
