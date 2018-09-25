import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import { PageWrapper } from './styles';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'Backpack',
          price: 89.99,
          image: 'https://image.ibb.co/kcdsRp/backpack.png',
        },
        {
          id: 2,
          name: 'Glasses',
          price: 39.99,
          image: 'https://image.ibb.co/fDfve9/shoes.png',
        },
        {
          id: 3,
          name: 'Hat',
          price: 9.99,
          image: 'https://image.ibb.co/jRWOXU/watch.png',
        },
        {
          id: 4,
          name: 'Shoes',
          price: 79.99,
          image: 'https://image.ibb.co/eP3Fe9/hat.png',
        },
        {
          id: 5,
          name: 'Watch',
          price: 139.99,
          image: 'https://image.ibb.co/bRpoz9/glasses.png',
        },
      ],
      arrayOfProducts: JSON.parse(localStorage.getItem('products')) || [],
    };
  }

  pushProductToLocal = (object, array) => {
    array.push(object);
    localStorage.setItem('products', JSON.stringify(array));
    this.setState({ arrayOfProducts: array });
  };

  removeProductToLocal = (object, arrayOfProducts) => {
    this.setState({ arrayOfProducts: arrayOfProducts.filter(e => e !== object) });
    localStorage.setItem('products', JSON.stringify(arrayOfProducts.filter(e => e !== object)));
  };

  render() {
    const { products, arrayOfProducts } = this.state;
    return (
      <PageWrapper>
        <Switch>
          <Route path="/" exact component={() => <Home products={products} arrayOfProducts={arrayOfProducts} pushToLocal={this.pushProductToLocal} />} />
          <Route path="/cart/" exact component={() => <Cart arrayOfProducts={arrayOfProducts} removeProductToLocal={this.removeProductToLocal} />} />
        </Switch>
      </PageWrapper>
    );
  }
}

export default Main;
