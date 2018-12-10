import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "Todo1" },
        { title: "Todo2" },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  resetTodo() {
    this.setState({tasks: []});
  }

  addTodo(title) {
    const { tasks } = this.state;

    tasks.push({ title });

    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>reset</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
