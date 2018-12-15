import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super();
    this.state = {
      localStorageString: '',
      string: ''
    };
  }
  componentDidMount() {
    this.getString();
  }
  saveString = () => {
    localStorage.setItem('storageString', this.state.string);
    this.getString();
  }
  getString = () => {
    const { storageString } = localStorage;
    this.setState({ localStorageString: storageString });
  }
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="block">
            <input type="text" value={this.state.string} onChange={(e) => { this.setState({ string: e.target.value }); }} />
            <button onClick={this.saveString} type="button">Save</button>
            <br />
            <p>{this.state.localStorageString ? this.state.localStorageString : ''}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
