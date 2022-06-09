import React, { useState } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';

interface IProps {
  commentItem: string;
}

export default function MainComments({ commentItem }: IProps) {
  // export default function MainComments({ commentItem }: { comment: string }) {
  // export default function MainComments(props: { comment: string }) {
  return (
    <li>
      Seokho__lee {commentItem}
      <FiHeart></FiHeart>
    </li>
  );
}

// 타입이랑 인터페이스 차이
// 타입 언노운, 보이드, 네버 차이

// 리액트쿼리
