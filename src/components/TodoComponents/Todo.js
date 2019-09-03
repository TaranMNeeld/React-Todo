import React from "react";
import "./Todo.css";

const Todo = props => {
    return (
        <div
            className={`${props.todo.completed ? "completed" : ""}`} 
            onClick={props.toggleTask(props.todo.id)}
        >
            <p>{props.todo.task}</p>
        </div>
    );
};

export default Todo;