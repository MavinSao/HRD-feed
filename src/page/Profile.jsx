import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.authReducer);
  
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
            {user.roles.map((role) => (
              <span>{role}</span>
            ))}
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
