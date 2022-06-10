import styled from 'styled-components';
import Nav from './Nav/Nav';
import MainCard from './Main/MainCard';
import Aside from './Aside/Aside';

export default function View() {
  return (
    <Container>
      <Nav />
      <MainCard />
      <Aside />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
