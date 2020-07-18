import React from "react";

function List() {
  return (
    <div className="todo-list">
      <a
        className="List-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <ul>
        <li>Go to market</li>
        <li>Buy food</li>
        <li>Make dinner</li>
      </ul>
    </div>
  );
}

export default List;
