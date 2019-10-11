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
      <input type = "checkbox" id = "if-phone"/>
      <label class = "navbar-hamburger nav-section" classificate = "nav-section" for = "if-phone">
      Open
      </label>
      <section class = "openNav">
      <Link to = {"/"+window.location.hash}>
        <label class="navbar-logo nav-section" classificate = "nav-section">SKupisz</label>
        </Link>
        <Link to = {"/portfolio/skills"+window.location.hash}>
        <label class="navbar-about nav-section" classificate = "nav-section">Portfolio</label>
        </Link>
        <Link to = {"/blog"+window.location.hash}>
        <label class="navbar-portfolio nav-section" classificate = "nav-section">Blog</label>
        </Link>
        <Link to = {"/contact"+window.location.hash}>
        <label class="navbar-contact nav-section" classificate = "nav-section">Contact me</label>
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
