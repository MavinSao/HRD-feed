import { Col, Container, Row } from "react-bootstrap";
import Post from "../components/Post";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/post";

function Feed() {
  const { data } = useSelector((state) => {
    return state.postReducer;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(data);
  return (
    <Container>
      <h1 className="my-3">Welcome to HRD Feeds</h1>
      <Row>
        <Col md={3}>
          <Post />
        </Col>
        <Col md={3}>
          <Post />
        </Col>
        <Col md={3}>
          <Post />
        </Col>
        <Col md={3}>
          <Post />
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;

// const mapStateToProps = (store) => {
//   return {
//     posts: store.postR.data,
//   };
// };

// const mapDispatchToProps = {
//   fetchPosts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Feed);
