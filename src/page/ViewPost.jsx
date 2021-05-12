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
import { findCommentByPostId, postComment } from "../redux/actions/comment";
import { findPostID } from "../redux/actions/post";

function ViewPost() {

  const [comment, setComment] = useState('')

  const { foundData } = useSelector((state) => state.postReducer);
  const { comments } = useSelector((state) => state.commentReducer);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findCommentByPostId(id));
  }, [foundData]);

  useEffect(() => {
    dispatch(findPostID(id));
  }, []);

  const onComment = ()=>{
    dispatch(postComment(comment,id))
  }

  return foundData ? (
    <Container>
      <h1 className="my-3">Detail Post</h1>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div>
                <img src="/icons/profile.png" alt="profile" />
                <span className="mx-2">{foundData.username}</span>
              </div>
              {foundData.owner ? (
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
                foundData.image.includes("http")
                  ? foundData.image
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
                {foundData.numberOfLikes} likes
              </div>
              <Card.Text className="text-justify">
                {foundData.caption}
              </Card.Text>
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
                <Form.Control type="text" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder="Comment" />
                <Button 
                    size="sm" 
                    className="mx-2 btn-dark"
                    onClick={()=>onComment()}
                >
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
