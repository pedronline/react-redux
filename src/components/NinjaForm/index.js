import React, { Component } from 'react';

class NinjaForm extends Component {
  state = {
    name: null,
    age: null,
    techs: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSumit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumit}>
          <label htmlFor="Name">Name: {this.state.name}</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="Name">Age {this.state.age}</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="Name">Techs: {this.state.techs}</label>
          <input type="text" id="techs" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NinjaForm;
