import React from "react";
import classes from "./classComponentOne.module.css"


class ClassComponentOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

        <ul className={classes.class}>
          <li>name: Anna</li>
          <li>age: 19</li>
        </ul>

    )
  }
}


export default ClassComponentOne