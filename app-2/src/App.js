import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 
 constructor(){
   super();

   this.state= {
     foods: [
      "spaghetti",
      "ice cream",
      "sushi",
      "bologna",
      "cheese"
     ]
   }
 }
 
 
 
  render() {

    let foodsToDisplay =  this.state.foods.map( (Element,index) => {
      return (
        <h2 key ={ index } >{Element}</h2>
      )
    })


    return (
      <div className="App">
       {foodsToDisplay}
      </div>
    );
  }
}

export default App;
