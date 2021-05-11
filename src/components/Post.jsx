import React from "react";
import { Card, Button } from "react-bootstrap";
function Post({post}) {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center">
        <img src="icons/profile.png" alt="profile" />
        <span className="mx-2">Username</span>
      </Card.Header>
      <Card.Img variant="top" src="image/placeholder-image.png" />
      <Card.Body>
        <Button size="sm" variant="dark">
          <img src="icons/like.png" alt="like" />
        </Button>
        <Button size="sm" variant="dark" className="mx-1">
          <img src="icons/comment.png" alt="comment" />
        </Button>
        <Button size="sm" variant="dark">
          <img src="icons/share.png" alt="share" />
        </Button>
        <div className="my-2 font-weight-bold">{post.numberOfLikes} likes</div>
        <Card.Text className="text-justify">
          {post.caption}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
