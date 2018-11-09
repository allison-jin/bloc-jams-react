import React, { Component } from 'react';


class Album extends Component {
  //constructor() {

  //}

  render(){
    return(
      <section className="album">
      {this.props.match.params.slug} Album page will go here
      </section>
    );
  }
}
export default Album;
