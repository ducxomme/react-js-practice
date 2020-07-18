import React, { Component } from "react";
import "../styles/HeaderLogin.css";

class HeaderLogin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header-container">
          <div className="header-left">Go back</div>

          <div className="header-center">
            <img src="http://lorempixel.com/50/50" />
          </div>

          <div className="header-right border border-secondary">Signup</div>
        </div>
      </div>
    );
  }
}

export default HeaderLogin;
