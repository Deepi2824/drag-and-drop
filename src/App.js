// import logo from './logo.svg';
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { data } from "./Components/data";
import { Column } from "./Components/Column";

function App() {
  const [characters, setCharacters] = useState(
    JSON.parse(localStorage.getItem("data")) ?? data
  );

  const onDragEndHandler = (result) => {
    const { source, destination, draggableId, type } = result;

    const start = characters.columns[source.droppableId];
    const finish = characters.columns[destination.droppableId];
   

    if (!destination) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(characters.order);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...characters,
        order: newColumnOrder,
      };
      setCharacters(newState);
    } else if (start.id === finish.id) {
      const newTask = Array.from(start.taskId);
      newTask.splice(source.index, 1);
      newTask.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskId: newTask,
      };
      const newState = {
        ...characters,
        columns: {
          ...characters.columns,
          [newColumn.id]: newColumn,
        },
      };

      setCharacters(newState);
      localStorage.setItem("data", JSON.stringify(newState));
    } else {
      const startTaskId = Array.from(start.taskId);
      startTaskId.splice(source.index, 1);
      const newStart = {
        ...start,
        taskId: startTaskId,
      };

      const finishTaskId = Array.from(finish.taskId);
      finishTaskId.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskId: finishTaskId,
      };

      const newState = {
        ...characters,
        columns: {
          ...characters.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      setCharacters(newState);
      localStorage.setItem("data", JSON.stringify(newState));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="flex"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {characters.order.map((x, index) => {
              const data = characters.columns[x];

              const result = data.taskId.map((y) => characters.task[y]);

              return (
                <div className="w-full" key={data.id}>
                  <Column column={data} task={result} index={index} />
                </div>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
