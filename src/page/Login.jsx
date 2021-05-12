import React,{useState} from "react";
import { Container, Form, Button } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux"
import { useHistory } from "react-router";
import { signIn } from "../redux/actions/auth";

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const dispatch = useDispatch()
  const {isLoggedIn} = useSelector((state)=>state.authReducer)

  const onLogin = (e)=>{
    e.preventDefault()
    dispatch(signIn(username,password))
    .then(()=>{
        history.push("/")
    })
    .catch(()=>{
      alert("Error");
    })

  }
  
  return (
    <Container>
      <h1 className="text-center">Sign In</h1>
      <Form className="w-50 m-auto spacing-y-2">
        <Form.Group controlId="username" className="my-2">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            type="text" 
            placeholder="Enter Username" />
        </Form.Group>
        <Form.Group controlId="password" className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="remenber" className="my-2">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" 
          onClick={(e)=>onLogin(e)}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
