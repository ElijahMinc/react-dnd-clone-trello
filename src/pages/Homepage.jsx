import React, { useState } from "react";
import {columnsFromBackend} from '../data'
import {DragDropContext, Droppable} from 'react-beautiful-dnd' 
import TaskCard from "../components/TaskCard";

const Homepage = props => {
    const [columns, setColumns] = useState(columnsFromBackend);

    const onDragEnd = (result) => {
        console.log("result", result);

        if (!result.destination) return;

        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
       
          setColumns((prevStateColumns) => { 
            const sourceColumn = prevStateColumns[source.droppableId];// draggble element -- from
            const destColumn = prevStateColumns[destination.droppableId];// droppble element -- to
            const sourceItems = [...sourceColumn.items];

            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);

            destItems.splice(destination.index, 0, removed);

            return {
                ...prevStateColumns,
                [source.droppableId]: {
                  ...sourceColumn,
                  items: sourceItems
                },
                [destination.droppableId]: {
                  ...destColumn,
                  items: destItems
                }
              }

          });
        } else {
    
          setColumns((prevStateColumns) => {
            const column = prevStateColumns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);

           return {
                ...prevStateColumns,
                [source.droppableId]: {
                  ...column,
                  items: copiedItems
                }
              }
          });
        }
      };

    return (
        <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="container">
          <div className="task-column-styles">
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {(provided, snapshot) => (
                    <div
                    className="task-list"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="title">{column.title}</div>
                      {column.items.map((item, index) => (
                        <TaskCard key={item.id} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              );
            })}
          </div>
        </div>
      </DragDropContext>
    );
};

export default Homepage;