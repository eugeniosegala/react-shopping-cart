import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../Products';
import Cart from '../Cart';
import { PageWrapper } from './styles';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      product: [
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
      arrayOfProduct: JSON.parse(localStorage.getItem('products')) || [],
    };
  }

  pushProductToLocal = (object, array) => {
    array.push(object);
    localStorage.setItem('products', JSON.stringify(array));
    this.setState({ arrayOfProduct: array });
  };

  removeProductToLocal = (object, arrayOfProduct) => {
    this.setState({ arrayOfProduct: arrayOfProduct.filter(e => e !== object) });
    localStorage.setItem('products', JSON.stringify(arrayOfProduct.filter(e => e !== object)));
  };

  render() {
    const { product, arrayOfProduct } = this.state;
    return (
      <PageWrapper>
        <Switch>
          <Route path="/" exact component={() => <Products product={product} arrayOfProduct={arrayOfProduct} pushToLocal={this.pushProductToLocal} />} />
          <Route path="/cart/" exact component={() => <Cart arrayOfProduct={arrayOfProduct} removeProductToLocal={this.removeProductToLocal} />} />
        </Switch>
      </PageWrapper>
    );
  }
}

export default Main;
