import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import HeaderLogin from "./components/HeaderLogin";
import LoginForm from "./components/LoginForm";
import MenuTab from "./components/MenuTab";

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["a", "b", "c"];
  }

  render() {
    return (
      <div className="App">
        <MenuTab />
        <HeaderLogin />
        <LoginForm email="abc@example.com" />
        {
        this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
        }
      </div>
    );
  }
}

export default App;
