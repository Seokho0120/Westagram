import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav';

export default function View() {
  return (
    <>
      <Nav />
      <Container></Container>
    </>
  );
}

const Container = styled.div``;
