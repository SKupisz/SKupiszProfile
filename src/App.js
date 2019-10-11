import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Welcome from "./components/welcome.jsx";
import Blog from "./components/blog.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";
import OptionsBar from "./components/openingBar.jsx";

import "./css/main/main.css";

function App() {
  return (
    <div className="App">
      <Router>
    <div className="App">
      <nav class="mainNavbar">
      <section class = "openNav">
      <Link to = {"/"+window.location.hash}>
        <div class="navbar-logo nav-section top-nav" classificate = "nav-section">SKupisz</div>
        </Link>
        <Link to = {"/portfolio/skills"+window.location.hash}>
        <div class="navbar-about nav-section top-nav" classificate = "nav-section">Portfolio</div>
        </Link>
        <Link to = {"/blog"+window.location.hash}>
        <div class="navbar-portfolio nav-section top-nav" classificate = "nav-section">Blog</div>
        </Link>
        <Link to = {"/contact"+window.location.hash}>
        <div class="navbar-contact nav-section top-nav" classificate = "nav-section">Contact me</div>
        </Link>
        </section>


      </nav>
      <main class="appContent">
      <Route exact path = "/" component = {Welcome}/>
      <Route path = "/blog" component = {Blog}/>
      <Route path = "/contact" component = {Contact}/>
      <Route path = "/portfolio" component = {Projects}/>
      <OptionsBar/>
      </main>
    </div>
    </Router>
    </div>
  );
}

export default App;
