import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default TodoItem;