import React from "react"
import Details from './views/Details'
import Favorite from './views/Saved'
import Home from './views/Home'
import Navbar from './components/Navbar'
import './App.css'


import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export default function App() {
  return (
    // <Router>
    <>
    <Navbar/>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/news/:id">
            <Details />
          </Route>
          <Route exact path="/saved">
            <Favorite />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </>
    // </Router>
  );
}
