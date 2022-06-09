import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';
import MainCard from './Main/MainCard';

export default function View() {
  return (
    <Container>
      <Nav />
      <MainCard />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
