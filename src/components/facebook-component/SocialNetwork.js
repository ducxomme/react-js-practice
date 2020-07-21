import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../utilities/fontawesome";
import "../../styles/SocialNetwork.css";
import { faAlignJustify, faThList } from "@fortawesome/free-solid-svg-icons";

class SocialNetwork extends Component {
  render() {
    return (
      <div className="social-network-container mt-5 container-fluid">
        <div className="social-network-top-container">
          <div className="post-container-top d-flex">
            <div className="post-left-title text-sm-left flex-grow-1">Bài viết</div>
            <div className="post-right-setting d-flex justify-content-end">
              <div className="post-filter px-3 py-1">
                <FontAwesomeIcon icon="cog" />
                <span>Bộ lọc</span>
              </div>
              <div className="post-filter ml-2 px-3 py-1">
                <FontAwesomeIcon icon="cog" />
                <span>Quản lý bài viết</span>
              </div>
            </div>
          </div>

          <div className="post-container-bottom d-flex">
            <div className="post-view-list-left col-sm-6">
              <FontAwesomeIcon icon={faAlignJustify} />
              <span className="ml-2">Xem theo danh sách</span>
            </div>
            <div className="post-view-list-right col-sm-6">
              <FontAwesomeIcon icon={faThList} />
              <span className="ml-2">Xem theo danh sách</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialNetwork;
