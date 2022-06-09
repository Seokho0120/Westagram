import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import MainComments from './MainComments/MainComments';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedCounts from './FeedCount/FeedCounts';

import { ImageType } from '../../Type/Interface';

export default function CardFeeds() {
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<string[]>([]);

  const addFeedComment = () => {
    if (!comment) return;
    setCommentList([...commentList, comment]);
    setComment(''); // 엔터 후 input 새로고침
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
      <FeedCounts />
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
  :focus {
    outline: none;
  }
`;

const FeedButton = styled.button<{ isVariable: boolean }>`
  border: none;
  background-color: white;
  font-size: 12px;
  font-weight: 500;
  color: rgb(51, 143, 255);
  opacity: ${props => (props.isVariable ? '1' : '0.5')};
`;
