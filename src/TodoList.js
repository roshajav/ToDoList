import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const addToDoItems = () => {
    if (task.trim !== "") {
      setTodo([...todo, task]);
      setTask("");
    }
  };

  const removeToDoItems = (index) => {
    const newToDo = todo.filter((_, idx) => idx !== index);
    setTodo(newToDo);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        &ensp;
        <button onClick={addToDoItems}> Add </button>
      </div>
      <ul>
        {todo.map((item, index) => (
          <ul key={index}>
            {item} &ensp;
            <button onClick={() => removeToDoItems(index)}> X </button>
          </ul>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
