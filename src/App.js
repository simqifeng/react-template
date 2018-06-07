import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import Loading from './Loading';
import createStore from './redux/index';

import './styles/normalize.css';
import './styles/common.css';

const store = createStore();

/* 项目入口页 这个组件的资源会按需打包加载 */
const Welcome = Loadable({
  loader: () => import('./pages/welcome/Welcome.jsx'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact paht="/" component={Welcome}></Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
