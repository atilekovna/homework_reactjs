import React, { Component } from 'react';
import { WorkList } from "../../components/workList/WorkList";


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {works: []};
  }

  getWorks = () => {
    this.setState({works: ["Work 1", "Work 2"]});
  }

  render() {
    return (
      <div>
          <button onClick={this.getWorks}>get</button>
          <WorkList workList={this.state.works}/>
      </div>
    );
  }
}

export default PortfolioPage;