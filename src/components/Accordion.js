import { GoChevronDown, GoChevronLeft } from "react-icons/go";

import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedindex, setExpandedIndex] = useState(-1);

  const handleClick = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? -1 : idx));
  };

  const renderedItems = items.map((item, idx) => {
    const isExpanded = idx === expandedindex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between items-center p-3 bg-gray-50 border-b  cursor-pointer"
          onClick={() => handleClick(idx)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
