import { useState, useCallback } from 'react';

export default function useHeartHandler() {
  const [activeHeart, setActiveHeart] = useState<boolean>(false);

  const HeartHandler = useCallback(() => {
    setActiveHeart(!activeHeart);
  }, [activeHeart]);

  return [activeHeart, HeartHandler()];
}

// 질문하기
