import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Comment from "../components/Comment";
import { findCommentByPostId } from "../redux/actions/comment";

function ViewPost() {
  const [post, setPost] = useState();
  const { data } = useSelector((state) => state.postReducer);
  const { comments } = useSelector((state) => state.commentReducer);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    let post = data.find((post) => post.id == id);
    setPost(post);
  }, []);

  useEffect(() => {
    dispatch(findCommentByPostId(id));
    console.log("comments", comments);
  }, []);

  console.log(post);

  return post ? (
    <Container>
      <h1 className="my-3">Detail Post</h1>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div>
                <img src="/icons/profile.png" alt="profile" />
                <span className="mx-2">{post.username}</span>
              </div>
              {post.owner ? (
                <DropdownButton
                  size="sm"
                  as={ButtonGroup}
                  variant="dark"
                  title="More"
                  id="bg-vertical-dropdown-1"
                >
                  <Dropdown.Item eventKey="1">Delete</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
                </DropdownButton>
              ) : (
                ""
              )}
            </Card.Header>
            <Card.Img
              variant="top"
              src={
                post.image.includes("http")
                  ? post.image
                  : "/image/placeholder-image.png"
              }
            />
            <Card.Body>
              <Button size="sm" variant="dark">
                <img src="/icons/like.png" alt="like" />
              </Button>
              <Button size="sm" variant="dark" className="mx-1">
                <img src="/icons/comment.png" alt="comment" />
              </Button>
              <Button size="sm" variant="dark">
                <img src="/icons/share.png" alt="share" />
              </Button>
              <div className="my-2 font-weight-bold">
                {post.numberOfLikes} likes
              </div>
              <Card.Text className="text-justify">{post.caption}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <ListGroup as="ul">
            <ListGroup.Item as="li">
              <h3>Comment</h3>
            </ListGroup.Item>
            {comments.length > 0 ? (
              comments.map((comment, idx) => (
                <Comment key={idx} comment={comment} />
              ))
            ) : (
              <ListGroup.Item as="li">
                <b>No Comment</b>
              </ListGroup.Item>
            )}
            <ListGroup.Item as="li">
              <Form className="d-flex">
                <Form.Control type="text" placeholder="Comment" />
                <Button size="sm" className="mx-2 btn-dark">
                  Send
                </Button>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>Data Not Found</h1>
  );
}

export default ViewPost;
