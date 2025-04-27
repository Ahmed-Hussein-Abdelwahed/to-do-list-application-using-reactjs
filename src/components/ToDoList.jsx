import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handelInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTsaks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTsaks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTsaks = [...tasks];
      [updatedTsaks[index], updatedTsaks[index - 1]] = [
        updatedTsaks[index - 1],
        updatedTsaks[index],
      ];
      setTasks(updatedTsaks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTsaks = [...tasks];
      [updatedTsaks[index], updatedTsaks[index + 1]] = [
        updatedTsaks[index + 1],
        updatedTsaks[index],
      ];
      setTasks(updatedTsaks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task ..."
          value={newTask}
          onChange={handelInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Move up ↑
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Move down ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
