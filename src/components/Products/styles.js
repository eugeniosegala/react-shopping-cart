import styled from 'styled-components';

export const SingleProduct = styled.div`
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  overflow: hidden;
  width: 250px;
  height: 350px;
  margin: 10px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  text-align: center;
`;

export const ProductPrice = styled.div`
  text-align: center;
  font-size: 12px;
  font-wight: bold;
  padding: 5px;
`;

export const ProductButton = styled.div`
  text-align: center;
  padding: 18px;
  color: white;
  background-color: #2196F3;
  cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
`;

export const CartIcon = styled.img`
  width: 20px;
`;
