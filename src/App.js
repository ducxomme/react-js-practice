import React, { Component } from "react";
import "./App.css";
// import TodoItem from "./components/TodoItem";
// import HeaderLogin from "./components/HeaderLogin";
// import LoginForm from "./components/LoginForm";
// import MenuTab from "./components/MenuTab";
// import TableList from './components/TableList';
// import Notification from './components/Notification';
// import TrafficLight from './components/traffic-light/TrafficLight';
import SearchBox from './components/search-box/SearchBox';
class App extends Component {
  constructor() {
    super();
    this.todoItems = ["a", "b", "c"];
  }

  render() {
    return (
      <div className="App">
        {/* <Notification hasUnread={true}/>
        <MenuTab />
        <HeaderLogin />
        <LoginForm email="abc@example.com" />
        {
        this.todoItems.map((item, index) => <TodoItem key={index} title={item} />)
        }
        <TableList /> 
        <TrafficLight /> */}
        <SearchBox />
      </div>
    );
  }
}

export default App;
