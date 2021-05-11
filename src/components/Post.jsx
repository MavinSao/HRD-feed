import React from "react";
import { Card, Button } from "react-bootstrap";
function Post() {
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
        <div className="my-2 font-weight-bold">1,675 likes</div>
        <Card.Text className="text-justify">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
