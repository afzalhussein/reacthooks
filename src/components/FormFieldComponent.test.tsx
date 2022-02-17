import { render, screen } from "@testing-library/react"
import FormField from "./FormFieldComponent"


describe('FormField', () => {
    test('should render', () => {
        const changeHandler = jest.fn();
        render(<FormField label={"My Label"} labelText={"Place label"} changeHandler={changeHandler}/>);
        const element = screen.getByTestId(/formField/);
        expect(element).toBeDefined();
        const inputElement = screen.getByTestId(/input_test/);
        expect(inputElement).toBeDefined();
        const labelElement = screen.getByText('My Label');
        expect(labelElement).toBeDefined();
    })
})