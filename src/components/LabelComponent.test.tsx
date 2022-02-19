import { render, screen  } from "@testing-library/react"
import Label from './LabelComponent'


test('Label is defined', ()=>{
    render(<Label label="My Label"/>);
    const target = screen.getByText(/My Label/);
    expect(target).toBeDefined();
})