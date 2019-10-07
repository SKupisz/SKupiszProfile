import React from 'react';
import {Link} from 'react-router-dom';

let titles = ["My Programming Books"];
let addresses = ["/blog/my-programming-books"];
/*"Pros and cons of mysqli","/blog/pros-and-cons-of-mysqli"*/
let headerTable = [["My Programming Books"],["Moje książki do programowania"]];
titles = headerTable[0];
let nowHash = window.location.hash;
function check(){
  if(nowHash != window.location.hash){
    if(window.location.hash != "" && window.location.hash != "#/")
    {
      nowHash = window.location.hash;
    }
    window.location.hash = nowHash;
  }
  if(nowHash == "")
  {
    window.location.hash = "#/";
  }
  if(window.location.hash == "#/english")
  {
    titles = headerTable[0];
  }
  else if(window.location.hash == "#/polski")
  {
    titles = headerTable[1];
  }
  else {
    titles = headerTable[0];
  }
  setTimeout(check,100);
}

export default class BlogList extends React.Component{
  render(){
    check();
    let blogList = titles.map((titlesEl,index) =>
    <Link to = {addresses[index]}><div class = "toArticle" id = {addresses[index]}>
    <header class = "articleTitle">{titlesEl}</header></div></Link>);
    return(<section class = "blogList">
    {blogList}
  </section>);
  }
}
