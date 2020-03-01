import React, { useState } from 'react';

export default function Counter() {
  const [isCounter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(isCounter + 1);
  }

  return (
    <>
      <h1>Counter:{isCounter}</h1>
      <button onClick={incrementCounter}>Increment +1</button>
    </>
  );
}
