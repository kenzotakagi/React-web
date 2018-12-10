import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "Todo1", id: 0 },
        { title: "Todo2", id: 1 },
      ],
      uniqueID: 1,
    };
  }

  addTodo(title) {
    const {
      tasks,
      uniqueID
    } = this.state;

    tasks.push({
      title,
      id: uniqueID,
    });

    this.setState({
      tasks,
      uniqueID: uniqueID + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
