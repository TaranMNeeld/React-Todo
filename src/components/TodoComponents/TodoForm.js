import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }

    handleInputChanges = event => {
        this.setState({
          todo: event.target.value
        });
      };

    render() {
        return (
            <form onSubmit={this.props.submitTodo}>
                <input
                    type="text"
                    placeholder="Type Todo"
                    value={this.todo}
                    name="todo"
                    onChange={this.handleInputChanges}
                />
                <button onClick={this.props.submitTodo} value={this.state.todo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed Todos</button>
            </form>
        );
    }
};

export default TodoForm;