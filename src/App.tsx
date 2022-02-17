import { ChangeEvent, useState } from "react";
import "./App.css";

import Label from "./components/LabelComponent";
import FormField from "./components/FormFieldComponent";

function App() {
  const [customerName, setCustomerName] = useState("");
  const changeHandler = function (event: ChangeEvent<HTMLInputElement>): void {
    setCustomerName(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="hooks">React Hooks: Use State</h1>
        <FormField
          label="Enter customer name"
          labelText="customer name"
          changeHandler={changeHandler}
        />
        <Label label={customerName} />
      </header>
    </div>
  );
}

export default App;
