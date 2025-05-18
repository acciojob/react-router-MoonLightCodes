import React from "react";
import "./../styles/App.css";
import { Link, Route, Switch } from "react-router-dom";

const App = () => {
  const About = () => (
    <>
      <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </>
  );
  const Home = () => <h1>Welcome to my website!</h1>;
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>
  );
};

export default App;
