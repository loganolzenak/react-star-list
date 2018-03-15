import React, { Component } from 'react';

class StarForm extends Component {
    render() {
      return (
            <form onSubmit={this.props.HandleSubmit}>
                <input value={this.props.newStar.name} onChange={this.props.HandleChangeFor('name')}/>
                <input value={this.props.newStar.diameter} onChange={this.props.HandleChangeFor('diameter')}/>
                <input type="submit" value="Submit New Star!"/>
            </form>
        );
    }
}
  
  
  
  
  export default StarForm;
  