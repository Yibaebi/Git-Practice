import React, { Component } from "react";
import List from "./List";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { todo: "Eat", id: 1 },
        { todo: "Dance", id: 2 },
        { todo: "Kiss Prisca", id: 3 },
      ],
      newTodo: null,
    };
  }

  deleteTodo = (id) => {
    let todoList = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState({
      todoList: todoList,
    });
  };

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.newTodo !== null && this.state.newTodo !== "") {
      let id = this.state.todoList.length + 1;

      this.setState({
        todoList: [
          ...this.state.todoList,
          { todo: this.state.newTodo, id: id },
        ],
      });
    }
  };

  editTodo = (id) => {
    let editTodo = prompt("Edit todo:", "");
    console.log(id);

    if (editTodo !== "" || editTodo !== null) {
      const updatedList = this.state.todoList;
      updatedList.forEach((todo) => {
        console.log(todo.todo);

        if (todo.id === id) {
          todo.todo = editTodo;
        }
      });
      
      this.setState({
          todoList: updatedList,
      });
    }
  };

  render() {
    return (
      <div className="todo-app">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Please enter a new todo"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add</button>
        </form>
        <List
          todoList={this.state.todoList}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

export default TodoList;
