import React, { Fragment, Component } from 'react';
import {
  Switch, Route, Redirect
} from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About';
import Menu from './Components/Menu';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: false
    };
  }
  toggleMenu = () => {
    this.setState(prevState => (
      { menuActive: !prevState.menuActive }
    ));
  }
  closeMenu = () => {
    this.setState({
      menuActive: false
    });
  }
  render() {
    const menuActive = this.state.menuActive ? 'active' : 'not';
    return (
      <Fragment>
        <Menu menuActive={menuActive} toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} />
        <div id="wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
