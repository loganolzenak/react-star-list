import React, { Component } from 'react';


class CurrentNewStar extends Component {
  render() {
    return (
      <div>
        <h2>This is a current new Star?</h2>
        <p>New Star is {this.props.newStar.name} and has diameter {this.props.newStar.diameter}</p>
        </div>
    );
  }
}




export default CurrentNewStar;
