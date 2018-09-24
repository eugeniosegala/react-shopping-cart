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

const checkProductToLocal = (object, array, func) => {
  if (!localStorage.getItem('products')) {
    func(object, array);
  } else if (!JSON.parse(localStorage.getItem('products')).find(e => e.id === object.id)) {
    func(object, array);
  }
};

const isFavorite = (object) => {
  let message = '';
  if (localStorage.getItem('products') && JSON.parse(localStorage.getItem('products')).find(e => e.id === object.id)) {
    message = <CartIcon alt="cart" src={Cart} />;
  } else {
    message = 'Add';
  }
  return message;
};

const products = ({
  product,
  arrayOfProduct,
  pushToLocal,
  removeProductToLocal,
}) => (
  <React.Fragment>
    {product.map((elm, index) => (
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
            <ProductButton onClick={() => checkProductToLocal(elm, arrayOfProduct, pushToLocal)}>
              {isFavorite(elm, index)}
            </ProductButton>
          }
          {removeProductToLocal &&
            <ProductButton onClick={() => removeProductToLocal(elm, product)}>
              Remove
            </ProductButton>
          }
        </ProductDetail>
      </SingleProduct>
    ))}
  </React.Fragment>
);

products.propTypes = {
  product: PropTypes.array,
  arrayOfProduct: PropTypes.array,
  pushToLocal: PropTypes.func,
  removeProductToLocal: PropTypes.func,
};

export default products;
