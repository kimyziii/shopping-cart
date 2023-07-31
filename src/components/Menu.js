import React from "react";
import styled from "styled-components";

const Menu = (props) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;
    border: 1px solid black;
    width: 70vw;
    height: 10vh;
  `;
  const Displayer = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Name = styled.div``;
  const Price = styled.div``;
  const Controller = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;
  const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  `;
  const QuantityLabel = styled.div`
    font-size: small;
  `;
  const Quantity = styled.input``;
  const AddButton = styled.button`
    cursor: pointer;
  `;

  return (
    <Wrapper>
      <Displayer>
        <Name>{props.name}</Name>
        <Price>{props.price}원</Price>
      </Displayer>
      <Controller>
        <QuantityWrapper>
          <QuantityLabel>수량</QuantityLabel>
          <Quantity value={props.quantity}></Quantity>
        </QuantityWrapper>
        <AddButton>추가하기</AddButton>
      </Controller>
    </Wrapper>
  );
};

export default Menu;
