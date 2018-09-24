import React from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './styles';
import Product from '../../components/Product';

const cart = ({ arrayOfProduct, removeProductToLocal }) => (
  <MainContainer>
    {arrayOfProduct.length > 0 ?
      <Product product={arrayOfProduct} removeProductToLocal={removeProductToLocal} /> : <span>Cart is Empty</span>
    }
  </MainContainer>
);

cart.propTypes = {
  arrayOfProduct: PropTypes.any,
  removeProductToLocal: PropTypes.func,
};

export default cart;
