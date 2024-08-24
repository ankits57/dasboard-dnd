import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableComponent = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-full border-2 border-dashed ${
        isOver ? "border-green-500" : "border-gray-500"
      } flex items-center justify-center relative`}
    >
      {children}
    </div>
  );
};

export default DroppableComponent;
