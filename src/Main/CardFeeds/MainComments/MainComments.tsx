import { useState, useCallback } from 'react';
import { CommentsType } from '../../../Type/Interface';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

interface IProps {
  commentList: CommentsType;
  removeComments: (id: number) => void;
}

export default function MainComments({ commentList, removeComments }: IProps) {
  const [activeHeart, setActiveHeart] = useState<boolean>(false);

  const HeartHandler = useCallback(() => {
    setActiveHeart(!activeHeart);
  }, [activeHeart]);

  return (
    <MainComment>
      <div>
        <ID>{commentList.name}</ID>
        <CommentItem>{commentList.comments}</CommentItem>
      </div>
      <StatusIcons onClick={HeartHandler}>
        {activeHeart ? <FaHeart className="FaHeart" /> : <FiHeart />}
        <FiTrash2
          onClick={() => removeComments(commentList.id)}
          className="FiTrash2"
        />
      </StatusIcons>
    </MainComment>
  );
}

const MainComment = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

const ID = styled.span`
  font-weight: 600;
`;

const CommentItem = styled.span`
  margin-left: 6px;
`;

const StatusIcons = styled.div`
  .FaHeart {
    color: #f72119;
  }

  .FiTrash2 {
    margin-left: 5px;
  }
`;
