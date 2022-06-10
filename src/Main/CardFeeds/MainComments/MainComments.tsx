import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { CommentsType } from '../../../Type/Interface';

interface IProps {
  commentItem: CommentsType;
  removeComments: (id: number) => void;
  // removeComments: Function;
}

export default function MainComments({ commentItem, removeComments }: IProps) {
  const [activeHeart, setActiveHeart] = useState<boolean>(false);

  const HeartHandler = useCallback(() => {
    setActiveHeart(!activeHeart);
  }, [activeHeart]);

  return (
    <MainComment>
      <div>
        <ID>Seokho__lee</ID>
        <CommentItem>{commentItem.comments}</CommentItem>
      </div>
      <StatusIcons onClick={HeartHandler}>
        {activeHeart ? <FaHeart className="FaHeart" /> : <FiHeart />}
        <FiTrash2
          onClick={() => removeComments(commentItem.id)}
          className="FiTrash2"
        />
      </StatusIcons>
    </MainComment>
  );
}

const MainComment = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
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
