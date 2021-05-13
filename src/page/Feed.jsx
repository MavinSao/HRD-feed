import { Col, Container, Row } from "react-bootstrap";
import Post from "../components/Post";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/post";

function Feed() {
  const { data } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Container>
      <h1 className="my-3">Welcome to HRD News Feed</h1>
      <Row>
        {data.map((post, idx) => (
          <Col md={3} key={idx} className="my-2">
            <Post post={post} />
          </Col>
        ))}
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
