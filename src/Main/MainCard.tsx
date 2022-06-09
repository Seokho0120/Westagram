import React from 'react';
import styled from 'styled-components';
import CardUserInfo from './CardUserInfo/CardUserInfo';
import { ImageType } from '../Type/Interface';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

export default function MainCard() {
  const cardImg: ImageType[] = [
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: '카드 이미지',
    },
  ];

  return (
    <CardContainer>
      <CardUserInfo />
      {cardImg.map((item, idx) => {
        return <CardImg src={item.image} alt={item.description} key={idx} />;
      })}
      <CarFeed>zzzz</CarFeed>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  max-width: 700px;
  background-color: white;
  padding: 16px;
`;

const CardImg = styled.img`
  margin-top: 20px;
`;

const CarFeed = styled.div``;
