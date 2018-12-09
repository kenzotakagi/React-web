import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = (props) => {
  return (
    <React.Fragment>
      <div>こんにちは、{props.children}さん</div>
    </React.Fragment>
  );
};

const Greeting = (props) => {
  return (
    <div>
      <div>ご挨拶</div>
      { props.children }
    </div>
  )
}

ReactDOM.render(
  <Greeting>
    <Hello>坂本龍馬</Hello>
    <Hello>西郷隆盛</Hello>
  </Greeting>,
  document.getElementById("root")
);

serviceWorker.unregister();
