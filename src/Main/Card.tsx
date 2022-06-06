import React from 'react';
import styled from 'styled-components';

export default function Card() {
  return (
    <CardContainer>
      <CardProfile></CardProfile>
      <CardImg></CardImg>
      <CarFeed></CarFeed>
    </CardContainer>
  );
}

const CardContainer = styled.section``;
const CardProfile = styled.section``;
const CardImg = styled.section``;
const CarFeed = styled.section``;
