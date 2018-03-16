import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Delete extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.handleSubmit();
  // }

  handleSubmit(event) {
    event.preventDefault();
    const url = `http://localhost:3000/recipes/`;
    axios.delete(url);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Delete</p>
        <button><input type="submit" value="Delete" className="btn btn-danger"/></button>
      </form>
    )
  }
}
