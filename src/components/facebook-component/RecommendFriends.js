import React, { Component } from 'react';
import FollowFriendListItem from './FollowFriendListItem';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/RecommendFriends.css';


class RecommendFriends extends Component {

  render() {
    return (
      <div className="recommend-friends-list-container container-fluid col-md-4 offset-md-4">
        <div className="content-top-container d-flex py-3 px-5 justify-content-start">
          <div className="content-top-left flex-grow-1">Gợi ý cho bạn</div>
          <div className="content-top-right">Xem tất cả</div>
        </div>
        <div className="friends-list-container">
          <FollowFriendListItem />
          <FollowFriendListItem />
          <FollowFriendListItem />
        </div>
      </div>
    )
  }
}

export default RecommendFriends;