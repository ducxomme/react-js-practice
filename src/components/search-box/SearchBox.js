import React, { Component } from "react";
import "../../utilities/fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    this.setState({
      isFocused: true
    });
  }

  onBlur() {
    this.setState({
      isFocused: false
    });
  }

  render() {
    const { isFocused } = this.state;
    return (
      <div className="search-box-container d-flex col-sm-4 offset-sm-4">
        <input
          type="text"
          className="flex-grow-1"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder="Type something to search..."
        />
        {!isFocused && <div className="search-icon">
          <FontAwesomeIcon icon="search" />
        </div>
        }
      </div>
    );
  }
}

export default SearchBox;
