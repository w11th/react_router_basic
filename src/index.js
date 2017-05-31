import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes.js';
import {Provider} from 'react-redux';
import store from './Store.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store} >
    <Routes />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
