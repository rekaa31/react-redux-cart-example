import React from "react";
import styled from "styled-components";
import CartIcon from "./icons/cart";
import { useSelector } from "react-redux";

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  background: #eee;
  padding: 8px 16px;
`;

const StyledCartContainer = styled.div`
  display: flex;
`;

export default function Navbar(props) {
  const cartReducer = useSelector(state => state.cartReducer)

  return (
    <StyledNav>
      <StyledCartContainer>
        <CartIcon />
        <p>{cartReducer}</p>
      </StyledCartContainer>
    </StyledNav>
  );
}
