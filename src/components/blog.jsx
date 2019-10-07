import React from 'react';
import {Route} from 'react-router-dom';

import BlogList from "../blog/list.jsx";
import ArticlesDirectories from "../blog/articlesDirectories.jsx";

import '../css/blog/main.css';

export default class Blog extends React.Component{
  render(){
    return(
      <div class = "blog">
      <Route exact path = "/blog" component = {BlogList}/>
      <Route path = "/blog" component = {ArticlesDirectories}/>
      </div>
    );
  }
}
