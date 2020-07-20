import React, { Component } from "react";
import "../styles/HeaderLogin.css";

class HeaderLogin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header-container m-4">
          <div className="header-left">Go back</div>

          <div className="header-center">
            <img src="http://lorempixel.com/50/50" alt="header-icon"/>
          </div>

          <div className="header-right d-flex flex-column justify-content-center">Signup</div>
        </div>
      </div>
    );
  }
}

export default HeaderLogin;
