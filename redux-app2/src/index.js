import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  tasks: []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
    return {
      ...state,
      tasks: state.tasks.concat([action.task])
    };
    default:
    return state;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
