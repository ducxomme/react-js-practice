import React, { Component } from "react";
import classNames from 'classnames';
import "../../utilities/fontawesome";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocused: false,
      isExceed: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onChange(event) {
    let input = event.target.value;
    if(input.length > 10) {
      this.setState({
        isExceed: true
      })
    } else {
      this.setState({
        isExceed: false
      })
    }
  }

  render() {
    const { isFocused, isExceed } = this.state;
    return (
      <div className={classNames('search-box-container', 'mt-5', 'd-flex', 'col-sm-4', 'offset-sm-4', {
        'red-border': isExceed
      })}>
        <input
          type="text"
          className="flex-grow-1"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
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
