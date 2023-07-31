import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Menus = (props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    gap: 1rem;
  `;
  return (
    <Wrapper>
      {props.data.map((menu, index) => {
        return (
          <Menu
            key={index}
            name={menu.name}
            price={menu.price}
            quantity={menu.quantity}
          ></Menu>
        );
      })}
    </Wrapper>
  );
};

export default Menus;
