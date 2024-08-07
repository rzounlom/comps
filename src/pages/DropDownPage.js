import Dropdown from "../components/Dropdown";
import { options } from "../data/options";
import { useState } from "react";

const DropDownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
    console.log("seleced: ", option);
  };
  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
};

export default DropDownPage;
