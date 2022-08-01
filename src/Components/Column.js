import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Card from "./Card";

export const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div className="border border-gray-600 text-center m-2" {...provided.draggableProps} ref={provided.innerRef}>
          <h1 {...provided.dragHandleProps}>{props.column.title}</h1>

          <Droppable droppableId={props.column.id} type="task">
            {(provided) => (
              <div
                className="min-h-screen overflow-y-scroll"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.task.map((x, index) => (
                  <Card key={x.id} data={x} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
