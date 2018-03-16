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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const url = `http://localhost:3000/recipes/${this.state.recipe}`;
    axios.post(url)
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A recipe was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Recipe Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Recipe Instructions:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Recipe Time Needed:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Image Url:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
