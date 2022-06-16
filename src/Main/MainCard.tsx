import styled from 'styled-components';
import CardUserInfo from './CardUserInfo/CardUserInfo';
import CardFeeds from './CardFeeds/CardFeeds';
import { cardImg } from '../Data/FixImg';

export default function MainCard() {
  return (
    <CardContainer>
      <CardUserInfo />
      {cardImg.map(cardImg => {
        return (
          <img src={cardImg.image} alt={cardImg.description} key={cardImg.id} />
        );
      })}
      <CardFeeds />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  width: 24%;
  background-color: white;
  border-radius: 10px;

  @media screen and (max-width: 860px) {
    width: 34%;
  }
`;
