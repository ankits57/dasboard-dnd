import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableComponent = ({ id, isDropped }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : "none",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`${
        isDropped ? "absolute inset-0 w-full h-full" : "relative mt-2"
      } bg-blue-500 text-white p-4 rounded-md shadow-lg flex items-center justify-center`}
    >
      Drag me {id}
    </div>
  );
};

export default DraggableComponent;
