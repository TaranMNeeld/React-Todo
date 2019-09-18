import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import "./Todo.css";
import { Divider, Header, Segment } from "semantic-ui-react";

const Category = props => {
    return (
        <div className="category">
            <Segment>
                <button onClick={props.clearCompleted}>X</button>
                <Header as="h2">
                    {props.name}
                    <TodoForm submitTodo={this.submitTodo} clearCompleted={this.clearCompletedTodo}/>
                </Header>
                <Divider clearing />
                {props.todos.map(todo => {
                    console.log(todo)
                    return <Todo
                        key={todo.id}
                        todo={todo}
                        toggleTask={props.toggleTask}
                    />
                })}
            </Segment>
        </div>
    );
};

export default Category;