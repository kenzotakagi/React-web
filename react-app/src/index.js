import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = (props) => {
  return (
    <React.Fragment>
      <div>こんにちは、{props.name}さん</div>
    </React.Fragment>
  );
};

ReactDOM.render(
  <div>
    <Hello name="坂本龍馬" />
    <Hello name="西郷隆盛" />
    <Hello name="勝海舟" />
  </div>,
  document.getElementById("root")
);

serviceWorker.unregister();
