import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = () => {
  return <div>こんにちは、坂本龍馬さん</div>;
};

ReactDOM.render(
  <div>
    <Hello />
    <Hello />
    <Hello />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
