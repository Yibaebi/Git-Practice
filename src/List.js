import React from "react";

function List({ todoList, deleteTodo, editTodo }) {
  const List = todoList.map((todo) => (
    <div key={todo.id}>
      <p>{todo.todo}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button onClick={() => editTodo(todo.id)}>Edit</button>
    </div>
  ));

  return <div className = "todoList">{List}</div>;
}

export default List;
