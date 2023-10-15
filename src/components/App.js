import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks]= useState(TASKS);
  const [categoryFilter, setCategoryFilter]=useState("All");
  console.log(tasks);

    function handleDeleteClick(event){
      let updatedTasks = tasks.filter((task)=>{return task.text!== event.target.value});
      setTasks(updatedTasks);
    }

    function handleFilterClick(event){
      setCategoryFilter(event.target.value);

    } 
    

    const onTaskFormSubmit = (newItemObj)=>{
      let updatedTasks =[...tasks, newItemObj];
      setTasks(updatedTasks);
      
      

      
    }

    const tasksToDisplay = tasks.filter((task)=>{
      if (categoryFilter==="All") return true;
      return task.category===categoryFilter;
    }).filter((task)=>{if (categoryFilter==="All") return true; else{return task.category===categoryFilter}})
  


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleFilterClick={handleFilterClick} categoryFilter={categoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;