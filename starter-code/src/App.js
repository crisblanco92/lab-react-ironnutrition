import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

import FoodBox from './components/ FoodBox'
import FoodForm from './components/FoodForm'
import Search from './components/Search'


class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: foods,
      copyfoods : foods,
      buttonState: false
    }
  }


changeButtonStage = () => {
 this.setState({buttonState: !this.state.buttonState})
}


addNewFood = food => {
  const foodsCopy = [...this.state.foods]
  foodsCopy.push(food)
    this.setState({
      foods: foodsCopy,
      copyfoods : foodsCopy
    })
}

searchForFood = elem => {

  let foodsCopy2 = [...this.state.copyfoods]
  foodsCopy2 = foodsCopy2.filter((food) => {
    console.log(elem)
    return food.name.toLowerCase().includes(elem.toLowerCase())

  })
  this.setState({
    foods: foodsCopy2
  })
}




  render() {
    console.log()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      
        <div className="food-form">
        <button onClick={this.changeButtonStage}>Add New Food</button>

        {this.state.buttonState === true && <FoodForm addNewFood={this.addNewFood}/>}

        </div>
        <div className="search-container">
        <Search searchForFood={this.searchForFood}/>
        </div>

        <div className="food-container">
        {this.state.foods.map((food, index) => {
          return <FoodBox key={index} {...food} />
        })}
        </div>

      </div>
    );
  }
}

export default App;
