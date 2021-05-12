import './App.css';
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './page/Feed';
import About from './page/About';
import Profile from './page/Profile';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Setting from './page/Setting';
import { Container } from 'react-bootstrap';
import CreatePost from './page/CreatePost';
import ViewPost from './page/ViewPost';


function App() {

  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/">
          <Feed />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/post">
          <CreatePost />
        </Route>
        <Route path="/detail/post/:id">
          <ViewPost />
        </Route>
        <Route path="*">
          <Container><h1 className="my-3">404 Not Found</h1></Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
