import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import HeaderLogin from "./components/HeaderLogin";
import LoginForm from './components/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderLogin />
        <LoginForm />
      </div>
    );
  }
}

export default App;
