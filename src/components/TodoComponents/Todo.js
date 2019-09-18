import React from "react";
import "./Todo.css";
import { Label } from "semantic-ui-react";

const Todo = props => {
    return (
        <div className="todo-div">
            <Label
                as="a"
                color="teal"
                tag
                className={`${props.todo.completed ? "todo completed" : "todo"}`}
                onClick={() => props.toggleTask(props.todo.id)}>
                <p>{props.todo.task}</p>
            </Label>
        </div>
    );
};

export default Todo;