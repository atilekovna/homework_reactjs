import React, { Component } from 'react';

class AboutAs extends Component {
  showText = false;
  constructor(props) {
    super(props);
    this.state ={title: ""};
  }

  changeTitle = () => {
    this.showText = !this.showText;

    this.showText
      ? this.setState({title: "Hello"})
      : this.setState({title: ""})
  }

  render() {
    return (
      <>
        <p>{this.state.title}</p>
        <button onClick={this.changeTitle}>click me</button>
      </>
    );
  }
}

export default AboutAs;