import { GoChevronDown, GoChevronUp } from "react-icons/go";

import { useState } from "react";

const Dropdown = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);
    //what option did the user click on?
    // console.log(option);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronUp className="text-xl" />
        ) : (
          <GoChevronDown className="text-xl" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
