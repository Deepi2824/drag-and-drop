import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

export const Column = (props) => {

  return (
    <div className="border border-gray-600 text-center m-2">
      <h1>{props.column.title}</h1>
    
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div className="min-h-screen overflow-y-scroll" {...provided.droppableProps} ref={provided.innerRef}>
            {props.task.map((x,index) => (
              
              <Card key={x.id} data={x} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
