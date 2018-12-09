import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Profile = (props) => {
  return (
    <ul>
      <li>名前: {props.name}</li>
      <li>誕生日: {props.birthDay}</li>
    </ul>
  )
}

const profile = {
  name: '坂本龍馬',
  birthDay: '1836/01/03',
};
  
ReactDOM.render(
  <Profile {...profile} />,
  document.getElementById("root")
);

serviceWorker.unregister();
