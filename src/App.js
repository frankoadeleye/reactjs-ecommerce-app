import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import MySignupForm from './components/signup';
import MyLoginForm from './components/login';


class  App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="" component={ProductList} />
            <Route path="/reactjs-ecommerce-app/details" component={Details} />
            <Route path="/reactjs-ecommerce-app/cart" component={Cart} />
            <Route path="/reactjs-ecommerce-app/signup" component={MySignupForm} />
            <Route path="/reactjs-ecommerce-app/login" component={MyLoginForm} />
            <Route  component={Default} />
          </Switch>
          <Modal />
      </React.Fragment>
    );
  }
 
}

export default App;
