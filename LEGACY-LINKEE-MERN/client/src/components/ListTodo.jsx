import React from "react";

const ListTodo = ({ todos, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <ul>
        <li>No todo(s) left</li>
      </ul>
    );
  } else {
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} onClick={() => deleteTodo(todo._id)}>
            {todo.action}
          </li>
        ))}
      </ul>
    );
  }
};

export default ListTodo;
