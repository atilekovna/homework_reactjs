import React from 'react';

function About(props) {

  return (
    <>
      <p>title: {props.aboutInfo.title}</p>
      <p>subtitle: {props.aboutInfo.subtitle}</p>
    </>
  );
}

export default About;