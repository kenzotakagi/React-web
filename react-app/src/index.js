import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

serviceWorker.unregister();
