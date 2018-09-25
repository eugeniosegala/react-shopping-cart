import React from 'react';
import PropTypes from 'prop-types';
import Products from '../../components/Products';
import { MainContainer } from './styles';

const Home = ({ products, arrayOfProducts, pushToLocal }) => (
  <MainContainer>
    <Products products={products} arrayOfProducts={arrayOfProducts} pushToLocal={pushToLocal} />
  </MainContainer>
);

Home.propTypes = {
  products: PropTypes.array,
  arrayOfProducts: PropTypes.array,
  pushToLocal: PropTypes.func,
};

export default Home;
