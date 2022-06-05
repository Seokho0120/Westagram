import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';

export default function Nav() {
  return (
    <NavFixed>
      <NavContainer>
        <NavLogo>
          <BsInstagram />
          <Line />
          <Name>Westagram</Name>
        </NavLogo>
        <NavSearch />
        <NavStatus></NavStatus>
      </NavContainer>
    </NavFixed>
  );
}

const NavFixed = styled.div`
  position: fixed;
  width: 100%;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 12px 0;
`;

const NavLogo = styled.div`
  justify-content: space-around;
  align-items: center;
  flex-basis: auto;
  display: flex;
  flex-basis: 116px;
  font-size: 22px;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 1px;
  height: 24px;
  border-left: 1px solid black;
  margin: 10px;
`;

const Name = styled.span`
  /* font-family: 'Billabong', sans-serif; */
`;

const NavSearch = styled.input``;

const NavStatus = styled.div``;
