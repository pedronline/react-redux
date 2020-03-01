import React, { Component } from 'react';
import NinjasList from './components/NinjasList';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Pedro', age: '28' },
      { id: 2, name: 'Ninja', age: '20' }
    ]
  };
  render() {
    return (
      <>
        <NinjasList ninjas={this.state.ninjas} />
      </>
    );
  }
}

export default App;
