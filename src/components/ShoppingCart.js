import React from "react";
import styled from "styled-components";

const ShoppingCart = () => {
  const Wrapper = styled.button`
    border: 1px solid black;
    background: white;
    width: 12rem;
    height: 2rem;
    margin: 1rem 2rem;
  `;
  return <Wrapper>장바구니</Wrapper>;
};

export default ShoppingCart;
