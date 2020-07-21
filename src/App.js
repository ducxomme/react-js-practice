import React, { Component } from "react";
import "./App.css";
// import TodoItem from "./components/TodoItem";
import HeaderLogin from "./components/login-component/HeaderLogin";
import LoginForm from "./components/login-component/LoginForm";
import MenuTab from "./components/menu-component/MenuTab";
import SocialNetwork from './components/facebook-component/SocialNetwork';
import RecommendFriends from './components/facebook-component/RecommendFriends';

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["a", "b", "c"];
  }

  render() {
    return (
      <div className="App">
        <RecommendFriends />
        <SocialNetwork />
        <HeaderLogin />
        <LoginForm email="abc@example.com" />
      </div>
    );
  }
}

export default App;
