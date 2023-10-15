import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteClick }) {

  return (
    <div className="tasks">
      {tasks.map((task)=>{return (
        <Task key={task.text} text={task.text} category={task.category} handleDeleteClick={handleDeleteClick} />
        )
        })}
    </div>
  );
}

export default TaskList;