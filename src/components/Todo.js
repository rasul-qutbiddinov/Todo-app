import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  function handleChangeTodo(e, todo) {
    e.stopPropagation();
    setEdit({ id: todo.id, value: todo.text });
  }

  const handleDeleteTodo = (e, todo) => {
    e.stopPropagation();
    removeTodo(todo.id);
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        >
          <div>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={(e) => handleDeleteTodo(e, todo)}
              className="delete-icon"
            />
            <TiEdit
              onClick={(e) => handleChangeTodo(e, todo)}
              className="edit-icon"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
