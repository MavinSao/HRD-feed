import React from "react";
import { ListGroup } from "react-bootstrap";
function Comment({ comment }) {
  return (
    <ListGroup.Item as="li">
      <div className="d-flex align-items-start">
        <img src="/icons/profile.png" alt="profile" />
        <div className="d-flex flex-column mx-2">
          <b>{comment.user.username}</b>
          <span>{comment.content}</span>
        </div>
      </div>
    </ListGroup.Item>
  );
}

export default Comment;
