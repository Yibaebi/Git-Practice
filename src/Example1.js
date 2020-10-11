import React, { Component } from "react";
import Test2 from "./Test2";
import AddNinjas from "./addNinja";

class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: [
        { name: "Ryu", age: 30, belt: "black", id: 1 },
        { name: "Queen", age: 25, belt: "green", id: 2 },
        { name: "Precious", age: 40, belt: "gold", id: 3 },
      ],
      sortValue: null,
    };
  }
  handleInputChange = (event) => {
    let sortValue = event.target.value;

    if (event.target.value) {
      this.setState({
        sortValue: sortValue,
      });
    }
  };

  addNinja = (name, age, belt) => {

    let id = this.state.ninjas.length + 1

    this.setState({
      ninjas: [...this.state.ninjas, {name, age, belt, id}]
    })

    console.log(this.state);
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({
      ninjas: ninjas,
    })
  }

  render() {
    return (
      <div className="main-app">
        <Test2 ninjas={this.state.ninjas} sortValue = {this.state.sortValue} deleteNinja = {this.deleteNinja}/>
        <input type="text" onChange={this.handleInputChange}></input>
        <AddNinjas addNinja = {this.addNinja}/>
      </div>
    );
  }
}

/*class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Elliot",
      age: 50,
      style: {
        color: "blue",
        fontWeight: "bold",
        backgroundColor: "lightGrey",
        height: "auto",
        padding: "1em",
        textAlign: "center",
      },
    };
  }

  handleMouseOver = (event) => {
    this.setState({
      style: { ...this.state.style, backgroundColor: "black", color: "white" },
    });
  };
  handleMouseLeave = (event) => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: "lightGrey",
        color: "blue",
      },
    });
  };

  handleInputChange = (event) => {
    let newAge = event.target.value;
    if (event.target.value) {
      this.setState({
        age: newAge,
      });
    } 
    else {
      this.setState({
        age: 50,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.name + this.state.age);
  };

  render() {
    return (
      <div>
        <p
          style={this.state.style}
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        >
          Hi there! My name is {this.state.name} and I am {this.state.age} years
          old.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            style={{
              width: 300,
              height: 20,
              backgroundColor: "lightblue",
              color: "crimson",
              textAlign: "center",
            }}
            placeholder="Enter a new age"
            onChange={this.handleInputChange}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },

  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = (searchTerm) => (item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class Example1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      searchTerm: "",
    };

    // this.onDismiss = this.onDismiss.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onDismiss = (id) => {
    const isNotId = (item) => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);

    this.setState({ list: updatedList });
  };

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <br></br>
            <span>{item.author} </span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <br></br>
            <span>
              <button onClick={() => console.log(item.objectID)} type="button">
                Dismiss
              </button>
            </span>
          </div>
        ))}
      </div>
    );
  }
} */

export default Test1;
