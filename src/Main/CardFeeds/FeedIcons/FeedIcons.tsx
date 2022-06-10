import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

export default function FeedIcons() {
  return (
    <FeedIcon>
      <FiHeart />
      <FaRegComment />
      <FiShare />
    </FeedIcon>
  );
}

const FeedIcon = styled.section`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 24px;
`;
