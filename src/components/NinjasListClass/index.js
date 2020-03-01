import React, { Component } from 'react';

import './style.css';

export default class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}
