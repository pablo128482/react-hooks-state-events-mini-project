import React, { useState } from "react";

function NewTaskForm( { categories, onTaskFormSubmit } ) {
const[taskText, setTaskText]=useState("");
const [taskCategory, setTaskCategory]=useState("Code");
const newTaskObj = {text:taskText, category:taskCategory}

function handleTextChange(event){
  setTaskText(event.target.value);
 }

function handleCategoryChange(event){
 setTaskCategory(event.target.value)
}

function handleSubmit (e){
  e.preventDefault();
  onTaskFormSubmit(newTaskObj);
  // setTaskText("");
  // setTaskCategory('Code');
}

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {categories.map((category)=>{if(category!=="All")return <option key={category} value={category}>{category}</option>})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
