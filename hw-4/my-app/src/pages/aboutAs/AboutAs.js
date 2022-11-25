import React, { Component } from 'react';

class AboutAs extends Component {
  constructor(props) {
    super(props);
    this.state ={text: false};
  }

  changeTitle = () => {
    this.setState({text: !this.state.text});
  }

  render() {
    return (
      <>
        <button onClick={this.changeTitle}>click me</button>
        {
          this.state.text === true
          ?
            <p>hello</p>
            :
            ""
        }
      </>
    );
  }
}

export default AboutAs;