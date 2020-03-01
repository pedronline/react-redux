import React, { Component } from 'react';

import './style.css';

export default class Ninjas extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div className="ninja">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}
