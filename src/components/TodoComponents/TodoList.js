import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => {
                console.log(todo)
                return <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTask={props.toggleTask}
                />
            })}
        </div>
    );
};

export default TodoList;