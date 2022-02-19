import { render, screen } from "@testing-library/react";
import { Simulate } from "react-dom/test-utils";
import Input from "./InputComponent";

describe("Input", () => {
  test("should be rendered", () => {
    const changeEventHandler = jest.fn();
    render(
      <Input
        labelText={"test"}
        onchangeHandler={changeEventHandler}
        inputValue={"testValue"}
      />
    );

    const element = screen.getByTestId(/input_test/);
    Simulate.change(element);
    expect(element).toBeDefined();
    expect(changeEventHandler).toHaveBeenCalled();
  });
});
