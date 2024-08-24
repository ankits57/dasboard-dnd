import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import DraggableComponent from "./Draggable/DraggableComponent";
import DroppableComponent from "./Droppable/DroppableComponent";
import CollapsiblePane from "./CollapsiblePane";

const Dashboard = () => {
  const initialItems = [
    { id: "item1", isDropped: false },
    { id: "item2", isDropped: false },
    { id: "item3", isDropped: false },
    { id: "item4", isDropped: false },
    { id: "item5", isDropped: false },
    { id: "item6", isDropped: false },
    { id: "item7", isDropped: false },
    { id: "item8", isDropped: false },
    { id: "item9", isDropped: false },
    { id: "item10", isDropped: false },
    { id: "item11", isDropped: false },
    { id: "item12", isDropped: false },
    { id: "item13", isDropped: false },
    { id: "item14", isDropped: false },
  ];

  const [items, setItems] = useState(initialItems);
  const [droppedItems, setDroppedItems] = useState({});

  const handleDragEnd = (event) => {
    const { over, active } = event;

    if (over) {
      setDroppedItems((prevState) => ({
        ...prevState,
        [over.id]: active.id,
      }));

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === active.id ? { ...item, isDropped: true } : item
        )
      );
    } else {
      setDroppedItems((prevState) => {
        const updatedState = { ...prevState };
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key] === active.id) {
            delete updatedState[key];
          }
        });
        return updatedState;
      });

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === active.id ? { ...item, isDropped: false } : item
        )
      );
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        {/* Collapsible left pane */}
        <CollapsiblePane>
          {items
            .filter((item) => !item.isDropped)
            .map((item) => (
              <DraggableComponent key={item.id} id={item.id} />
            ))}
        </CollapsiblePane>

        {/* Bento Box design */}
        <div className="flex-grow grid grid-cols-10 grid-rows-12 gap-2 p-2">
          <div className="col-span-2 row-span-4">
            <DroppableComponent id="droppable1">
              {droppedItems["droppable1"] && (
                <DraggableComponent id={droppedItems["droppable1"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-4 row-span-4">
            <DroppableComponent id="droppable2">
              {droppedItems["droppable2"] && (
                <DraggableComponent id={droppedItems["droppable2"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-3 row-span-2">
            <DroppableComponent id="droppable3">
              {droppedItems["droppable3"] && (
                <DraggableComponent id={droppedItems["droppable3"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-2">
            <DroppableComponent id="droppable4">
              {droppedItems["droppable4"] && (
                <DraggableComponent id={droppedItems["droppable4"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-2">
            <DroppableComponent id="droppable5">
              {droppedItems["droppable5"] && (
                <DraggableComponent id={droppedItems["droppable5"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-2">
            <DroppableComponent id="droppable6">
              {droppedItems["droppable6"] && (
                <DraggableComponent id={droppedItems["droppable6"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-3">
            <DroppableComponent id="droppable7">
              {droppedItems["droppable7"] && (
                <DraggableComponent id={droppedItems["droppable7"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-3 row-span-4">
            <DroppableComponent id="droppable8">
              {droppedItems["droppable8"] && (
                <DraggableComponent id={droppedItems["droppable8"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-4">
            <DroppableComponent id="droppable9">
              {droppedItems["droppable9"] && (
                <DraggableComponent id={droppedItems["droppable9"]} isDropped />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-4">
            <DroppableComponent id="droppable10">
              {droppedItems["droppable10"] && (
                <DraggableComponent
                  id={droppedItems["droppable10"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-2">
            <DroppableComponent id="droppable11">
              {droppedItems["droppable11"] && (
                <DraggableComponent
                  id={droppedItems["droppable11"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-4">
            <DroppableComponent id="droppable12">
              {droppedItems["droppable12"] && (
                <DraggableComponent
                  id={droppedItems["droppable12"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-2">
            <DroppableComponent id="droppable13">
              {droppedItems["droppable13"] && (
                <DraggableComponent
                  id={droppedItems["droppable13"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-1">
            <DroppableComponent id="droppable14">
              {droppedItems["droppable14"] && (
                <DraggableComponent
                  id={droppedItems["droppable14"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-3 row-span-4">
            <DroppableComponent id="droppable15">
              {droppedItems["droppable15"] && (
                <DraggableComponent
                  id={droppedItems["droppable15"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-2 row-span-4">
            <DroppableComponent id="droppable16">
              {droppedItems["droppable16"] && (
                <DraggableComponent
                  id={droppedItems["droppable16"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-3 row-span-4">
            <DroppableComponent id="droppable17">
              {droppedItems["droppable17"] && (
                <DraggableComponent
                  id={droppedItems["droppable17"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-2">
            <DroppableComponent id="droppable18">
              {droppedItems["droppable18"] && (
                <DraggableComponent
                  id={droppedItems["droppable18"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-2">
            <DroppableComponent id="droppable19">
              {droppedItems["droppable19"] && (
                <DraggableComponent
                  id={droppedItems["droppable19"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-2">
            <DroppableComponent id="droppable20">
              {droppedItems["droppable20"] && (
                <DraggableComponent
                  id={droppedItems["droppable20"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
          <div className="col-span-1 row-span-2">
            <DroppableComponent id="droppable21">
              {droppedItems["droppable21"] && (
                <DraggableComponent
                  id={droppedItems["droppable21"]}
                  isDropped
                />
              )}
            </DroppableComponent>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default Dashboard;
