import React, { useState, useEffect } from 'react';

function MainPage(props) {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title =  `вы нажали ${count} раз`
  })

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>

    </>
  );
}

export default MainPage;