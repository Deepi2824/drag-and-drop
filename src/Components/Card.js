import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = (props) => {
  return (
    <Draggable draggableId={props.data.id} index={props.index}>
      {(provided) => (
        <div
          className="border border-gray-500 m-4 flex justify-center gap-10 items-center"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img className="w-20" src={props.data.source} alt="card" />
          <p>{props.data.title}</p>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
