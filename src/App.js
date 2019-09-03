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
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoForm submitTodo={this.submitTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
      </div>
    );
  };
}

export default App;
