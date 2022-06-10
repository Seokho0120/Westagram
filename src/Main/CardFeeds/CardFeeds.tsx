import { useState, useCallback } from 'react';
import styled from 'styled-components';
import MainComments from './MainComments/MainComments';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedCounts from './FeedCount/FeedCounts';
import { CommentsType } from '../../Type/Interface';

const TEST: CommentsType[] = [
  {
    id: 1,
    comments: '댓글 테스트 1',
  },
  {
    id: 2,
    comments: '댓글 테스트 2',
  },
  {
    id: 3,
    comments: '댓글 테스트 3',
  },
];
let ids = 4;

export default function CardFeeds() {
  const [comment, setComment] = useState<string>('');
  const [commentList, setCommentList] = useState<CommentsType[]>(TEST);
  // 댓글에 id 가 들어가있는 형태로 만들기 위해서 list의 State에 객체 넣어줌

  const addFeedComment = useCallback(() => {
    if (!comment) return;
    setCommentList([...commentList, { id: ids, comments: comment }]);
    ids += 1;
    setComment(''); // 엔터 후 input 새로고침
  }, [comment, setComment, commentList, setCommentList]);

  console.log(commentList);
  // 처음 로딩 되면 commentList id: 1~3 객체가 있음
  // addFeedComment 실행되면 id: 4 객체가 추가됨

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
          {commentList.map((commentItem, idx) => {
            return (
              <MainComments
                commentItem={commentItem}
                removeComments={removeComments}
                key={idx}
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

const Test = styled.li``;

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
    font-size: 12px;
    color: gray;
  }
`;

const FeedInputContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
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
