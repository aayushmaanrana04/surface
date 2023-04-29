import React, { useEffect, useState } from "react";
import styles from "../../styles/widgets.module.css";
import useDragger from "../hooks/useDragger";

import eventBus from "../events/eventBus";

import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

function Todo({ id }) {
  useDragger(id);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [progress, setProgress] = useState("");

  function handleClose() {
    eventBus.emit("close", id);
  }

  useEffect(() => {
    let len = todos.length;
    let comp = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) {
        comp++;
      }
    }
    let percent = Math.floor((comp / len) * 100);
    setProgress(percent);
  }, [progress, todos]);

  const handleTodoInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleTodoKeyDown = (event) => {
    if (event.key === "Enter" && newTodo !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    } else if (event.key === "Enter" && newTodo === "") {
      event.preventDefault();
    }
  };

  const handleTodoClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div id={id} className={styles.todo}>
      <div>
        <AiFillCloseCircle
          onClick={handleClose}
          className={styles.close}
          size={20}
        />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className={styles.listitem}
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoClick(index)}
              />
              {todo.text}
            </label>
            <button onClick={() => handleTodoDelete(index)}>
              <MdOutlineDelete />
            </button>
          </li>
        ))}
      </ul>
      <input
        className={styles.todoInput}
        type="text"
        value={newTodo}
        placeholder="Add a new todo"
        onChange={handleTodoInputChange}
        onKeyDown={handleTodoKeyDown}
      />

      <div style={{ width: `${progress}%` }} className={styles.progress}>
        {progress > 0 ? `${progress}%` : ""}
      </div>
    </div>
  );
}

export default Todo;
