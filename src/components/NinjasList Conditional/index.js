import React from 'react';

import './style.css';

export default function NinjasList({ ninjas }) {
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>
          <p>{ninja.age > 25 ? 'maior de 25' : 'Oops'}</p>
        </div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
}
