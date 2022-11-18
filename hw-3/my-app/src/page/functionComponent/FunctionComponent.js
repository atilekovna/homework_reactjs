import React from 'react';

function FunctionComponent(props) {

  const sayHello = () => {
    console.log("Hello world")
  }

  return (
    <>
      <button onClick={sayHello}>Hello world</button>
    </>
  );
}

export default FunctionComponent;