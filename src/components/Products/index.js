import React from 'react';
import PropTypes from 'prop-types';
import {
  SingleProduct,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductDetail,
  CartIcon,
} from './styles';
import Cart from '../../assets/img/cart.svg';

const checkProductToLocal = (elm, arrayOfProducts, pushToLocal) => {
  if (!localStorage.getItem('products')) {
    pushToLocal(elm, arrayOfProducts);
  } else if (!JSON.parse(localStorage.getItem('products')).find(e => e.id === elm.id)) {
    pushToLocal(elm, arrayOfProducts);
  }
};

const isFavorite = (elm) => {
  let message = '';
  if (localStorage.getItem('products') && JSON.parse(localStorage.getItem('products')).find(e => e.id === elm.id)) {
    message = <CartIcon alt="cart" src={Cart} />;
  } else {
    message = 'Add';
  }
  return message;
};

const Products = ({
  products,
  arrayOfProducts,
  pushToLocal,
  removeProductToLocal,
}) => (
  <React.Fragment>
    {products.map((elm, index) => (
      <SingleProduct key={index}>
        <img width="100%" alt={elm.image} src={elm.image} />
        <ProductDetail>
          <ProductName>
            {elm.name}
          </ProductName>
          <ProductPrice>
            {`€ ${elm.price}`}
          </ProductPrice>
          {!removeProductToLocal &&
            <ProductButton onClick={() => checkProductToLocal(elm, arrayOfProducts, pushToLocal)}>
              {isFavorite(elm)}
            </ProductButton>
          }
          {removeProductToLocal &&
            <ProductButton onClick={() => removeProductToLocal(elm, products)}>
              Remove
            </ProductButton>
          }
        </ProductDetail>
      </SingleProduct>
    ))}
  </React.Fragment>
);

Products.propTypes = {
  products: PropTypes.array,
  arrayOfProducts: PropTypes.array,
  pushToLocal: PropTypes.func,
  removeProductToLocal: PropTypes.func,
};

export default Products;
