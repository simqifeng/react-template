import React, { Component } from 'react';
import Counter from './Counter';
import * as rest from '../../fetch/fetch';

import './styles/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="welcome-main">
          <img className="logo-img" src="./images/logo.svg" alt=""/>
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <Counter />
      </div>
    );
  }
}

export default Welcome;
