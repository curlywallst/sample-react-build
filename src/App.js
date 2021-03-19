import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home'
import './App.css';
import IngredientsForm from './containers/IngredientsForm';
import Box from './containers/Box'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
 
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Box} />
            <Route  path='/recipes/new' component={IngredientsForm} />
        </div>
      </Router>
    )
  }
}

export default App;
