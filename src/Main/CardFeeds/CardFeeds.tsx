import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import MainComments from './MainComments/MainComments';
import FeedIcons from './FeedIcons/FeedIcons';

import { ImageType } from '../../Type/Interface';

export default function CardFeeds() {
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<string[]>([]);

  const countImg: ImageType[] = [
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      description: '카운트 이미지',
    },
  ];

  const addFeedComment = () => {
    if (!comment) return;
    setCommentList([...commentList, comment]);
  };

  const updateComment = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setComment(e.target.value);
    },
    [setComment]
  );

  const keyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addFeedComment();
    }
  };

  const isVariable = comment.length ? true : false;

  return (
    <FeedContainer>
      <FeedIcons />
      <FeedCount>
        {countImg.map((item, idx) => {
          return <CountImg src={item.image} alt={item.description} key={idx} />;
        })}
        <CountText>WestaGram님 외 1,895명이 좋아합니다</CountText>
      </FeedCount>
      <FeedText>
        <span className="ID">Seokho__lee</span> 취준 그만..
      </FeedText>
      <FeedComments>
        {commentList.map(commentItem => {
          return <MainComments commentItem={commentItem} key="idx" />;
        })}
        <li className="TIME">40분전</li>
      </FeedComments>
      <FeedInputContainer>
        <FeedInput
          type="text"
          onKeyPress={keyEnter}
          placeholder="댓글 달기.."
          value={comment}
          onChange={updateComment}
        />
        <FeedButton
          type="button"
          onClick={addFeedComment}
          isVariable={isVariable}
        >
          게시
        </FeedButton>
      </FeedInputContainer>
    </FeedContainer>
  );
}

const FeedContainer = styled.section`
  padding: 10px;
`;

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
  padding-left: 12px;
  font-size: 14px;
  font-weight: 500;
`;

const FeedText = styled.div`
  font-size: 14px;

  .ID {
    font-weight: 600;
  }
`;

const FeedComments = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 2px 0;

  .TIME {
    font-size: 12px;
    color: gray;
  }
`;

const FeedInputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 0 0;
  margin: 12px 0 0 0;
  background-color: white;
  border-top: 1px solid rgb(196, 196, 196);
`;

const FeedInput = styled.input`
  padding: 0;
  border: none;
  background-color: white;
  font-size: 12px;
  width: 90%;
`;

const FeedButton = styled.button<{ isVariable: boolean }>`
  border: none;
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  color: rgb(51, 143, 255);
  opacity: ${props => (props.isVariable ? '1' : '0.5')};
`;
