import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

interface IProps {
  commentItem: string;
}

export default function MainComments({ commentItem }: IProps) {
  return (
    <MainComment>
      <div>
        <ID>Seokho__lee</ID>
        <CommentItem>{commentItem}</CommentItem>
      </div>
      <StatusIcons>
        <FiHeart className="HEART" />
        <FiTrash2 />
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
  .HEART {
    margin-right: 5px;
  }
`;
