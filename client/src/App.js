import React, { Component } from 'react';
import { BrowserRouter, /*Link,*/ Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import TokenService from './services/TokenService';
import './App.css';

// TESTING 2 TESTING 2 TESTING 2 TESTING 2 TESTING 2
// import RecipeList from './components/RecipeList';
// import NewRecipeForm from './components/NewRecipeForm';


class App extends Component {
  // api call for creating a new user
  // note that TokenService.save with the token is called
  // may also want to setState with the user data and
  // whether or not the user is logged in


  /* TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 */

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
      console.log(res.data)
      this.setState({
        data: res.data,
        loaded: true
      })
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
        <p>Instructions: {instructions}</p>
        <p>Needed time: {time_required}</p>
        <img src={image_url} alt="" />


        <ul>
          {ingredients}
        </ul>
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

  register(data) {
    axios('http://localhost:3000/users/', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token);
      console.log('registered');
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // same as above except route is login
  // as above, we are saving the token locally using
  // the TokenService
  login(data) {
    axios('http://localhost:3000/users/login', {
      method: "POST",
      data
    }).then(resp => {
      TokenService.save(resp.data.token);
    })
    .catch(err => console.log(`err: ${err}`));
  }

  // calling a restricted route on the server
  // the important part is setting the Authorization header
  // with the token retrieved from the TokenService
  authClick(ev) {
    ev.preventDefault();
    axios('http://localhost:3000/recipes', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  // just delete the token
  logout(ev) {
    ev.preventDefault();
    TokenService.destroy();
    console.log('logged out');
  }

  checkLogin() {
    axios('http://localhost:3000/isLoggedIn', {
      headers: {
        Authorization: `Bearer ${TokenService.read()}`,
      },
    }).then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          Weird button: <button onClick={this.authClick.bind(this)}>Weird Button</button>
          <p><button onClick={this.checkLogin.bind(this)}>Check If Logged In</button></p>
          <p><button onClick={this.logout.bind(this)}>Logout</button></p>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={(props) => (
                <Register {...props} submit={this.register.bind(this)} />
            )} />
          <Route exact path="/login" component={(props) => (
            <Login {...props} submit={this.login.bind(this)} />
          )} />
          </Switch>
        </BrowserRouter>

        {/* TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 TESTING 1 */}
        {this.state.loaded ? this.renderRecipeData() : 'loading'}
        {this.renderButtons()}


{/* TESTING 222222222222222 */}

        {/* <NewRecipeForm addFormSubmit={this.addFormSubmit} />
        {this.state.apiDataLoaded ? (
          <RecipeList
            recipes={this.state.apiData}
            currentlyEditing={this.state.currentlyEditing}
            setEditing={this.setEditing}
            deleteRecipe={this.deleteRecipe}
            editFormSubmit={this.editFormSubmit}
          />
        ) : (
          <p>Loading...</p>
        )} */}

      </div>
    );
  }
}

export default App;
