import Dropdown from "./components/Dropdown";
import { options } from "./data/options";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
    console.log("seleced: ", option);
  };

  return (
    <Dropdown options={options} value={selection} onChange={handleSelection} />
  );
}

export default App;
