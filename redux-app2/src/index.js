import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const store = createStore(tasksReducer);

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

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
})

store.dispatch(addTask("storeを学ぶ"))
console.log(store.getState())