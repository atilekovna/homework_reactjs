import React from 'react';
import { useState } from "react";

function AboutUs(props) {

  const [text, setText] = useState(false);

  const changeText = () => {
    setText(!text);
  }

  return (
    <>
      <button onClick={changeText}>click me</button>
      {
        text === true
          ?
          <p>Hello</p>
          :
          ""
      }
    </>
  );
}

export default AboutUs;