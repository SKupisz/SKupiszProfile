import React from 'react';
import {Link,HashRouter,Route} from 'react-router-dom';
//import {TranslatorProvider, useTranslate} from "react-translate";
import flagaPolski from "../img/options/flagaPolski.png";
import flagaWlk from "../img/options/flagaWlk.png";

import "../css/translate/main.css";
let now = window.location.href;
const srcs = ["/polski","/english"];
export default class OptionsBar extends React.Component{
  render(){
    return(
      <section class = "options-container">
      <input type = "checkbox" id = "options-support" class = "nav-section options-checkbox"/>
      <label for = "options-support" class="navbar-options nav-section" classificate = "nav-section">
      <div id = "navbar-options-no-opened">+</div>
      </label>
      <section class = "options-content">
      <HashRouter>
      <Link to = {srcs[0]}>
      <img src = {flagaPolski} class = "options-polish-img"/>
      </Link>
      <Link to = {srcs[1]}>
      <img src = {flagaWlk} class = "options-uk-img"/>
      </Link>
      </HashRouter>
      </section>
      </section>
    );
  }
}
