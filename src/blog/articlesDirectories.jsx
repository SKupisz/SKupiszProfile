import React from 'react';
import {Route} from 'react-router-dom';

import MyBooks from "./articles/laravelVsPurePHP.jsx";

export default class ArticlesDirectories extends React.Component{
  render(){
    return(
      <section class = "articlesDirectories">
      <Route path = "/blog/my-programming-books" component = {MyBooks}/>
      </section>
    );
  }
}
