import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utilities/fontawesome';
import '../styles/Notification.css';


class Notification extends Component {
  render() {
    const { hasUnread } = this.props;
    return (
      <div className="notification-container">
        <FontAwesomeIcon icon="bell" />
        { hasUnread && 
          <div className="dot-notification">
            <FontAwesomeIcon icon="circle" color="#BF1513" />
          </div>
        }
        
      </div>
    )
  }
}

export default Notification;