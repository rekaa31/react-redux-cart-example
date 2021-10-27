import React, { useState } from "react";
import styled from "styled-components";

const ProductCardContainer = styled.div`
  height: 400px;
  width: 300px;
  margin: 10px;
  border: 2px solid red;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80%;
`;

const StyleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
`;

export default function ProductCard(props) {
  return (
    <ProductCardContainer>
      {/* Product Image */}
      <StyledImageContainer>
        <StyleImage
          src="https://images.unsplash.com/photo-1630905894184-4af379b71c68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1108&q=80"
          alt=""
        />
      </StyledImageContainer>
      {/* Action */}
      <ActionContainer>
        <ActionButton onClick={props.onCancel}>Cancel</ActionButton>
        <p>Stock: {props.product.stock}</p>
        <ActionButton onClick={props.onBuy}>Buy</ActionButton>
      </ActionContainer>
    </ProductCardContainer>
  );
}
