import { useState, useCallback } from 'react';
import MainComments from './MainComments/MainComments';
import { CommentsType } from '../../Type/Interface';
import styled from 'styled-components';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedCounts from './FeedCount/FeedCounts';

export const FIX_COMMENTS: CommentsType[] = [
  {
    id: 1,
    name: 'whitemugwithbaileys',
    comments: '화이팅!',
  },
  {
    id: 2,
    name: 'vm_celeb',
    comments: '코딩을 즐거웡',
  },
  {
    id: 3,
    name: 'julytwentynineth',
    comments: '닥코 하세요',
  },
];

let ids: number = 4;

export default function CardFeeds() {
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<CommentsType[]>(FIX_COMMENTS);

  const addFeedComment = useCallback(() => {
    if (!comment) return;
    setCommentList([
      ...commentList,
      { id: ids, name: 'Seokho__lee', comments: comment },
    ]);
    ids += 1;
    setComment('');
  }, [comment, setComment, commentList, setCommentList]);

  const updateComment = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setComment(e.target.value);
    },
    [setComment]
  );

  const keyEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addFeedComment();
      }
    },
    [addFeedComment]
  );

  const isVariable = comment.length ? true : false;

  const removeComments = (id: number) => {
    setCommentList(commentList.filter(comments => comments.id !== id));
  };

  return (
    <>
      <FeedContainer>
        <FeedIcons />
        <FeedCounts />
        <FeedComments>
          {commentList.map(commentList => {
            return (
              <MainComments
                commentList={commentList}
                removeComments={removeComments}
                key={commentList.id}
              />
            );
          })}
          <li className="TIME">40분전</li>
        </FeedComments>
      </FeedContainer>
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
    </>
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
    margin-top: 8px;
    font-size: 8px;
    color: gray;
  }
`;

const FeedInputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: white;
  border-top: 1px solid rgb(196, 196, 196);
`;

const FeedInput = styled.input`
  padding: 0;
  border: none;
  background-color: white;
  font-size: 10px;
  width: 90%;
  :focus {
    outline: none;
  }
`;

const FeedButton = styled.button<{ isVariable: boolean }>`
  border: none;
  background-color: white;
  font-size: 10px;
  font-weight: 500;
  color: rgb(51, 143, 255);
  opacity: ${props => (props.isVariable ? '1' : '0.5')};
`;
