import React from "react";
import styled from "styled-components";

const AppLogo = () => {
  const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem;
  `;
  return (
    <>
      <Logo>DeliveryApp</Logo>
    </>
  );
};

export default AppLogo;
