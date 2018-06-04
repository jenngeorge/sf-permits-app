import React from "react";

const origin = window.location.origin;

export default class Menu extends React.Component {

  handleClick(e) {
    e.preventDefault();
    
    console.log('u clicked meee D:');
  }
  render () {
    return <p> I'm menu </p>;
  }
}
