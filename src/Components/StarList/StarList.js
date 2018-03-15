import React, { Component } from 'react';

class StarList extends Component {
    render() {
      return (
        <ul>
        {this.props.starList.map((star, i) => <li key= {i}> the star {star.name} is {star.diameter} million km in diameter</li>)}
      </ul>
      );
    }
  }
  
  
  
  
  export default StarList;
  