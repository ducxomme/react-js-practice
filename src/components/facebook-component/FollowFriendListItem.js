import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/FollowFriendListItem.css';


class FollowFriendListItem extends Component {
  render() {
    return (
      <div className="list-item-container d-flex align-items-center py-3 px-5">
        <div className="item-icon">
          <img className="rounded-circle" src="http://lorempixel.com/50/50" alt="item-icon"/>
        </div>
        <div className="item-content-center flex-grow-1 ml-4">
          <div className="content-top">Duc Nguyen Huu</div>
          <div className="content-bottom">Gợi ý cho bạn</div>
        </div>
        <div className="follow-right">Theo dõi</div>
      </div>
    )
  }
}

export default FollowFriendListItem;