import React from 'react';

export default class DescribingPhoto extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <section class = "photoDescribe" id = {this.props.id}>
      <figure class = "photo">
      <img src = {this.props.imgSrc} class = "photoShowing"/>
      <figcaption class = "photoCaption">{this.props.caption}</figcaption>
      </figure>
      <article class = "photoMainContent">
      <p class = "paragraph">
      {this.props.mainContent}
      </p>
      </article>
      </section>
    );
  }
}
