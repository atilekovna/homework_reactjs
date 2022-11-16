import React from 'react';
import About from "../components/page/About";

function AboutUs() {

  const text = {
    title: "hello",
    subtitle: "lorem lorem lorem"
  }
  return (
    <>
      <h1>About Us</h1>
      <About aboutInfo={text} />
    </>
  );
}

export default AboutUs;