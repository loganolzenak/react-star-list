import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import CurrentNewStar from '../CurrentNewStar/CurrentNewStar';
import StarList from '../StarList/StarList'
import NewStarForm from '../NewStarForm/NewStarForm';
import GetPlanets from '../Planets/GetPlanets'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newStar: {
        name: '',
        diameter: '',
      },
      starList: [
        {name: "Gacrux", diameter: 117}, 
        {name: "Hadar" , diameter: 30}, 
        {name: "fomalhaut" , diameter: 7}
      ],
      planetList: [],
    };
  
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }
  

  HandleChangeFor = propertyName => event => {
    this.setState({
      newStar: {
        ...this.state.newStar,
        [propertyName]: event.target.value,
      }
    });
  }

  getPlanets(){
    axios.get('https://swapi.co/api/planets/?fromat=json')
    .then(response => {
      const planets = response.data.results;
      this.gotPlanets(planets);
      console.log(planets);
    })
    .catch(error =>{
      console.log(error);
      
    })
  }

  gotPlanets(planets){
    this.setState({
      planetList: planets 
    });
    console.log(this.state.planetList);
  }

  componentDidMount(){
      this.getPlanets();
  }
  
  HandleSubmit(event){
    event.preventDefault();
    console.log('clicked');
    this.setState({
      newStar: {
        name: '',
        diameter: '',
      },
      starList: [...this.state.starList, this.state.newStar],
      })
  }

  render() {

    return (
    <div>
        <CurrentNewStar newStar={this.state.newStar}/>
        <NewStarForm newStar={this.state.newStar} HandleChangeFor={this.HandleChangeFor} HandleSubmit={this.HandleSubmit}/>
        <StarList starList={this.state.starList}/>
        <GetPlanets planetList={this.state.planetList}/>
    </div>
    );
  }
}




export default App;



// 




// one way to do get them to the dom
// <div>
// <p>{this.state.starList[0]}</p>
// <p>{this.state.starList[1]}</p>
// <p>{this.state.starList[2]}</p>
// </div>
// );