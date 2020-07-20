import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../utilities/fontawesome";
import "../styles/MenuItem.css"


class MenuItem extends Component {
  
  render() {
    const isClicked = this.props.clicked;
    let iconComponent;
    let textComponent;
    if (isClicked === "true") {
      iconComponent = <FontAwesomeIcon icon={this.props.itemImg} style={{ color: "#8CDC52" }}/>
      textComponent = <div className="item-text clicked">{ this.props.itemText }</div>
    } else {
      iconComponent = <FontAwesomeIcon icon={this.props.itemImg}/>
      textComponent = <div className="item-text">{ this.props.itemText }</div>
    }

    return (
      <div className={ "item-container px-5 py-3" + (isClicked === "true" ? ' clicked-box' : '') }>
        <div className="item-img">
          { iconComponent }
        </div>
        { textComponent }
      </div>
    )
  }

}

export default MenuItem;