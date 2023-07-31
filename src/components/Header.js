import React from "react";
import AppLogo from "./AppLogo";
import ShoppingCart from "./ShoppingCart";

import styled from "styled-components";

const Header = () => {
  const Wrapper = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  `;

  return (
    <Wrapper>
      <AppLogo></AppLogo>
      <ShoppingCart></ShoppingCart>
    </Wrapper>
  );
};

export default Header;
