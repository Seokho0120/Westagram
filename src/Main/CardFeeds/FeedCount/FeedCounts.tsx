import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { ImageType } from '../../../Type/Interface';

export default function FeedCounts() {
  const countImg: ImageType[] = [
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      description: '카운트 이미지',
    },
  ];

  return (
    <>
      <FeedCount>
        {countImg.map((item, idx) => {
          return <CountImg src={item.image} alt={item.description} key={idx} />;
        })}
        <CountText>WestaGram님 외 1,895명이 좋아합니다</CountText>
      </FeedCount>
      <FeedText>
        <span className="ID">Seokho__lee</span> 취준 그만..
      </FeedText>
    </>
  );
}

const FeedCount = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const CountImg = styled.img`
  border-radius: 50%;
  width: 4%;
`;

const CountText = styled.span`
  padding-left: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const FeedText = styled.div`
  font-size: 14px;

  .ID {
    font-weight: 600;
  }
`;
