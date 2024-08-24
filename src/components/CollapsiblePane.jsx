import React, { useState } from "react";

const CollapsiblePane = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex-shrink-0 ${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 bg-gray-800 text-white`}
    >
      <div className="flex justify-between items-center p-2">
        <span
          className={`${isOpen ? "block" : "hidden"} text-lg font-semibold`}
        >
          Items
        </span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? "<" : ">"}
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} p-2`}>{children}</div>
    </div>
  );
};

export default CollapsiblePane;
