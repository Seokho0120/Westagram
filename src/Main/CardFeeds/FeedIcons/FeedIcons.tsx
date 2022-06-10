import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';

export default function FeedIcons() {
  const [activeHeart, setActiveHeart] = useState<boolean>(false);

  const HeartHandler = useCallback(() => {
    setActiveHeart(!activeHeart);
  }, [activeHeart]);

  return (
    <FeedIcon onClick={HeartHandler}>
      {activeHeart ? <FaHeart className="FaHeart" /> : <FiHeart />}
      <FaRegComment />
      <FiShare />
    </FeedIcon>
  );
}

const FeedIcon = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  .FaHeart {
    color: #f72119;
  }
`;
