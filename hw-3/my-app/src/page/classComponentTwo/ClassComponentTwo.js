import React from 'react';
import classes from "./classComponentTwo.module.css"

class ClassComponentTwo extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <ul className={classes.class}>
          <li>name: Anna</li>
          <li>age: 19</li>

        </ul>
      </div>
    )
  }
}

export default ClassComponentTwo;