import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/MenuTab.css';
import MenuItem from './MenuItem';


class MenuTab extends Component {
  render() {
    return (
      <div className="menu-tab-container d-flex justify-content-center">
        <MenuItem itemImg="home" itemText= "HOME" clicked="true"/>
        <MenuItem itemImg="gift" itemText= "DEALS" clicked="false"/>
        <MenuItem itemImg="upload" itemText= "UPLOAD" clicked="false"/>
        <MenuItem itemImg="coffee" itemText= "WORK" clicked="false"/>
        <MenuItem itemImg="cog" itemText= "SETTINGS" clicked="false"/>
      </div>
    )
  }
}

export default MenuTab;