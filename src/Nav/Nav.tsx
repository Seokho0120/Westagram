import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

export default function Nav() {
  return (
    <NavFixed>
      <NavContainer>
        <NavLogo>
          <BsInstagram />
          <Line />
          <Title>Westagram</Title>
        </NavLogo>
        <NavSearch type="text" placeholder="검색" id="navbarSearch" />
        <NavStatus>
          <MdOutlineExplore className="logo" />
          <AiOutlineHeart className="logo" />
          <BsPerson className="logo" />
        </NavStatus>
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
  padding: 4px 0;
`;

const NavLogo = styled.div`
  justify-content: space-around;
  align-items: center;
  flex-basis: auto;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  width: 1px;
  height: 24px;
  border-left: 1px solid black;
  margin: 10px;
`;

const Title = styled.header`
  font-size: 16px;
`;

const NavSearch = styled.input`
  width: 14%;
  padding: 2px 0;
  padding-left: 10px;
  border-radius: 5px;
  background-color: rgb(241, 241, 241);

  &::placeholder {
    font-size: 10px;
    color: rgb(167, 167, 167);
  }
`;

const NavStatus = styled.section`
  display: flex;
  align-items: center;

  .logo {
    margin: 0 10px;
    font-size: 16px;
  }
`;
