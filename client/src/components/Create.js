import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      instructions: '',
      time: '',
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  postRecipeData() {
    const url = `http://localhost:3000/recipes/`;
    axios({
      url: url,
      data: {recipe: {name: this.state.name, instruction: this.state.instructions, time_required: this.state.time}}
    })
      .then(res => {
        this.setState({
          data: res.data,
          loaded: true
        })
      })
      .catch(err => {
        console.log('ERROR');
      });
    }

  componentDidMount() {
    this.postRecipeData()
  }

  handleSubmit(event) {
    this.postRecipeData();
    alert('A recipe was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleInputChange(e){
    e.preventDefault();
    const target = e.target;
    this.setState({[target.name]: target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Recipe Name:
          <textarea name="name" value={this.state.name} onChange={this.handleInputChange}/>
        </label>

        <label>
          Recipe Instructions:
          <textarea name="instructions" value={this.state.instrutions} onChange={this.handleInputChange}  />
        </label>

        <label>
          Recipe Time Needed:
          <textarea name="time" value={this.state.value} onChange={this.handleInputChange} />
        </label>

        <label>
          Image Url:
          <textarea name="url" value={this.state.value} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
