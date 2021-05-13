import React,{useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import Post from "../components/Post";
import { fetchPosts } from "../redux/actions/post";

function Profile() {
  const { user } = useSelector((state) => state.authReducer);
  const { data } = useSelector((state) => state.postReducer);
  const postUsers = data.filter((post) => post.owner);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [data])

  return (
    <Container>
      <h1 className="my-3">Profile</h1>
      <Row>
        <Col md={4}>
          <img
            src="/image/placeholder-image.png"
            alt="profile"
            className="w-100"
          />
        </Col>
        <Col md={8}>
          <h3>Username: {user.username}</h3>
          <h4>
            Role :
            {user.roles.map((role,  idx) => (
              <span key={idx}>{role}</span>
            ))}
          </h4>
        </Col>
      </Row>
      <h1 className="my-3">Your News Feed</h1>
      <Row>
        {postUsers.map((post, idx) => 
            <Col md={3} key={idx} className="my-2">
            <Post post={post} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Profile;
