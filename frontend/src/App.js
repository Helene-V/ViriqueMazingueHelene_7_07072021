import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AddUser from './pages/Register/AddUser';
import Article from './pages/Article/Article';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={AddUser} />
        <Route exact path="/article" component={Article} />
        <Route path="/profile/:id" component={Profile} />
      </Switch> 
    </>
  );
}


export default App;