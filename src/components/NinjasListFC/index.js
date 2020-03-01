import React from 'react';

import './style.css';

// import { Container } from './styles';

export default function NinjasList({ ninjas }) {
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
