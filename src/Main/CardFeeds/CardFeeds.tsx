import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import MainComments from './MainComments/MainComments';
import { ImageType } from '../../Type/Interface';
import { FiHeart } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

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

  return (
    <FeedContainer>
      <FeedIcons>
        <FiHeart />
        <FaRegComment />
        <FiShare />
      </FeedIcons>
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
          return <MainComments commentItem={commentItem} />;
        })}
        <li>40분전</li>
      </FeedComments>
      <FeedInputContainer>
        <FeedInput
          type="text"
          onKeyPress={keyEnter}
          placeholder="댓글 달기.."
          value={comment}
          onChange={updateComment}
        />
        <FeedButton type="button" onClick={addFeedComment}>
          게시
        </FeedButton>
      </FeedInputContainer>
    </FeedContainer>
  );
}

const FeedContainer = styled.section`
  padding: 10px;
`;

const FeedIcons = styled.section`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 24px;
`;

// const FeedIcons = styled.section<{ isChecked: boolean, is: string }>` // 한개 이상의 props는 받아올 수 없기 떄문에 한개 이상 받아올때는 INTERface로 써야함
//   display: flex;
//   align-items: center;
//   gap: 18px;
//   font-size: 24px;
//   /* ${({isChecked}) => } */
// `;

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

const FeedButton = styled.button`
  border: none;
  background-color: white;
  opacity: 0.5;
  font-size: 12px;
  color: rgb(51, 143, 255);
`;
