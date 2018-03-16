import React, { Component } from 'react';
import axios from 'axios';

export default class Show extends Component {

  constructor(props) {
  super(props);

  this.state = {
    data: null,
    recipe: 1,
    loaded: false,
  };

  // bind methods
  this.renderRecipeData = this.renderRecipeData.bind(this);
  this.fetchRecipeData = this.fetchRecipeData.bind(this);
  this.renderButtons = this.renderButtons.bind(this);
  this.previous = this.previous.bind(this);
  this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.fetchRecipeData();
  }

  fetchRecipeData() {
    const url = `http://localhost:3000/recipes/${this.state.recipe}`;
    axios.get(url)
      .then(res => {
        this.setState({
          data: res.data,
          loaded: true
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log('ERROR');
      });
  }

  renderRecipeData() {
    const  { name, instructions, time_required, image_url, ingredients } = this.state.data;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Needed time: {time_required}</p>
        <p>Ingredients</p>
        <ul>
          {ingredients.map(x => <li key = {x.id}> {x.name} ({x.quantity}) </li>)}
        </ul>
        <br/>
        Instructions: <p>{instructions}</p>
        <br/>
        <img src={image_url} alt="" />
      </div>
    )
  }

  renderButtons() {
    if(this.state.recipe === 1) {
      return (
        <button onClick={this.next}>Next</button>
      )
    }

    return (
      <div>
        <button onClick={this.previous}>Previous</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }

  previous(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        recipe: prevState.recipe - 1
      }
    }, this.fetchRecipeData);
  }

  next(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        recipe: prevState.recipe + 1
      }
    }, this.fetchRecipeData);
  }

  render() {
    return (
      <div>
        {this.state.loaded ? this.renderRecipeData() : 'loading'}
        <p>{this.renderButtons()}</p>
        <br />
      </div>
    )
  }
}
