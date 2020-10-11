import React from 'react';

class AddNinjas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            age: null,
            belt: null,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addNinja(this.state.name, +this.state.age, this.state.belt);
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = "name">Name</label>
                <input type="text" onChange={this.handleChange} id="name"></input>
                <label htmlFor = "age">Age</label>
                <input type="text" onChange={this.handleChange}id="age"></input>
                <label htmlFor = "belt">Belt</label>
                <input type="text" onChange={this.handleChange}id="belt"></input>
            
                <button type="submit">Add</button>
            </form>   
        )
    }
}

export default AddNinjas;