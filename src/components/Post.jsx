import React from "react";
import { Card, Button,DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Post({post}) {
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div><img src="icons/profile.png" alt="profile" />
        <span className="mx-2">{post.username}</span></div>
        {
          post.owner ? 
            <DropdownButton size="sm" as={ButtonGroup} variant="dark" title="More" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1" >Delete</Dropdown.Item>
            <Dropdown.Item eventKey="2" >Edit</Dropdown.Item>
          </DropdownButton>
        : ''
        }
      </Card.Header>
      <Link to={`/detail/post/${post.id}`}>
      <Card.Img 
                variant="top"
                src={
          
          post.image.includes("http")
     
                  ? post.image
          
             : "image/placeholder-image.png"
        
        }
     
      />
      </Link>
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
        <Card.Text className="text-justify">{post.caption}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
