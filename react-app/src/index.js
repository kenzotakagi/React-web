import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = () => {
  return (
    <React.Fragment>
      <div>こんにちは、坂本龍馬さん</div>
      <div>こんにちは、坂本龍馬さん</div>
    </React.Fragment>
  );
};

const helloElement = <Hello />;

ReactDOM.render(
  <div>
    {helloElement}
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
