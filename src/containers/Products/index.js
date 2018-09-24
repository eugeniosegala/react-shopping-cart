import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../components/Product';
import { MainContainer } from './styles';

const products = ({ product, arrayOfProduct, pushToLocal }) => (
  <MainContainer>
    <Product product={product} arrayOfProduct={arrayOfProduct} pushToLocal={pushToLocal} />
  </MainContainer>
);

products.propTypes = {
  product: PropTypes.array,
  arrayOfProduct: PropTypes.array,
  pushToLocal: PropTypes.func,
};

export default products;
