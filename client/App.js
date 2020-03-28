import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Header } from './src/components/header';
import Home from './src/screens/home';
import LoginForm from './src/screens/loginForm';
import SignupForm from './src/screens/signupForm';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
      </Switch>
    </div>
  );
}

export default App;
