import React, { Component } from 'react';

class Planets extends Component {
    render() {
      return (
            <div>
               {this.props.planetList.map(planet => <p key={planet.name}>{planet.name}</p> )}
            </div>
            );
          }
        }
  
  
  
  export default Planets;
  