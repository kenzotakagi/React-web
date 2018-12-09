import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = () => {
  return <div>こんにちは、坂本龍馬さん</div>;
};

const helloElement = <Hello />;

ReactDOM.render(
  <div>
    {helloElement}
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
