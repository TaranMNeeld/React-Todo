import React from "react";
import "./Todo.css";

class CategoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            category: ""
        };
    }

    handleInputChanges = event => {
        this.setState({
            category: event.target.value
        });
      };

    render() {
        return (
            <form className="category-form" onSubmit={this.props.submitCategory}>
                <input
                    type="text"
                    placeholder="Type Category"
                    value={this.category}
                    name="category"
                    onChange={this.handleInputChanges}
                />
                <button onClick={this.props.submitCategory} value={this.state.category}>Add Category</button>
            </form>
        );
    }
};

export default CategoryForm;