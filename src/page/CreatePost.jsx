import { Container, Button, Form } from "react-bootstrap";

import React, { useState } from "react";
import { postData } from "../redux/actions/post";
import { useDispatch } from "react-redux";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [imgPath, setImgPath] = useState("");

  const dispatch = useDispatch();

  const onPost = (e) => {
    e.preventDefault();
    dispatch(postData(caption, imgPath)).then(() => alert("Post Success"));
  };

  return (
    <Container>
      <h1 className="my-2 text-center">Creat Post</h1>
      <Form className="w-50 m-auto spacing-y-2">
        <Form.Group controlId="caption" className="my-2">
          <Form.Label>Caption</Form.Label>
          <Form.Control
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Enter Caption"
          />
        </Form.Group>
        <Form.Group controlId="password" className="my-2">
          <Form.Label>ImagePath</Form.Label>
          <Form.Control
            value={imgPath}
            onChange={(e) => setImgPath(e.target.value)}
            type="text"
            placeholder="Image Path"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => onPost(e)}>
          Post
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;
