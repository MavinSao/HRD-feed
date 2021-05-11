import './App.css';
import NavMenu from './components/NavMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Feed from './page/Feed';
import About from './page/About';
import Profile from './page/Profile';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Setting from './page/Setting';
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
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/setting">
          <Setting />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
