import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { signOut } from "../redux/actions/auth";
function NavMenu() {

  const {isLoggedIn,user} = useSelector((state)=>state.authReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const onSignOut = ()=>{
    dispatch(signOut())
    .then(()=>{
      history.push("/login")
    })
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          HRD FEED
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Feed
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/post">
              Post
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {isLoggedIn ? (
                <NavDropdown.Item as={Link} to="/profile">
                  {user.username}
                </NavDropdown.Item>
              ) : (
                ""
              )}
              <NavDropdown.Item as={Link} to="/setting">
                Setting
              </NavDropdown.Item>
              {!isLoggedIn ? (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Sign In
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/signup">
                    Sign Up
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => onSignOut()}>
                    Sign Out
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
