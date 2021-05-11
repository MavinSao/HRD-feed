import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router";
import { signUp } from "../redux/actions/auth";

function SignUp() {

  const [username, setUsername] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const history = useHistory()

  const {isLoggedIn} = useSelector((state)=>state.authReducer)

  const onSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(fullname,username,password)).then(()=>{
        alert("Sign Up Successfully")
        history.push("/login")
    })
    .catch(()=>{
        alert("Error")
    })
  }



  return (
    <Container>
      <h1 className="text-center">Sign Up</h1>
      <Form className="w-50 m-auto spacing-y-2">
        <Form.Group controlId="full-name" className="my-2">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
          />
        </Form.Group>
        <Form.Group controlId="username" className="my-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group controlId="password" className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="remenber" className="my-2">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => onSignUp(e)}>
          SignUp
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
