import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="block">
            <p>This is the Home page.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
