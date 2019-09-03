import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: "Taran",
      todos: []
    };
  };

  submitTodo = event => {
    event.preventDefault();
    if (event.target.value !== "") {
      const newTodo = {
        task: event.target.value,
        id: Date.now(),
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  toggleTask = id => {
    console.log(this.id);
  };

  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
        <TodoForm submitTodo={this.submitTodo} clearCompleted={this.clearCompleted}/>
      </div>
    );
  };
}

export default App;
