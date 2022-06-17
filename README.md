# Westagram

부트캠프에서 진행했던 Westagram 프로젝트를 리팩토링하는 토이 프로젝트 입니다.

기존 JavaScript로 진행했던 프로젝트를 새롭게 배운 TypeScript를 활용해 이전에 구현하지 못한 기능을 추가했습니다.

[(이전 프로젝트 링크)](https://github.com/Seokho0120/28-React-Westagram-5.git)

## 프로젝트의 목표

**TypeScript**와 친숙해지려고 노력했으며, 이전 프로젝트에서 구현하지 못했던 **댓글 추가, 삭제 및 좋아요 기능**을 구현했습니다.

최근까지 사용했던 **fetch**가 아닌 현업에서 선호하는 **axios**를 경험하고, **custom hook**을 사용해 로직의 반복을 최소화하고 재사용성을 높였습니다.

관심을 갖고 학습 중인 **성능 최적화**를 위해 **useCallback**과 **useMemo**를 학습 후 **useCallback**을 실제로 사용해 최적화를 구현했습니다.

또한, **media query**와 **가변형 이미지**를 활용해 **반응형 웹**을 구현했습니다.

1. TypeScript 활용

2. 댓글 추가, 삭제 및 좋아요 기능

3. Custom Hook & Axios 사용

4. 반응형 구현 (Media Query 및 가변형 이미지)

5. 성능 최적화 (useCallback, useMemo)

## 작업 기간

22.06.05 - 22.06.16 (실제 개발 기간 7일)

## Tech Stack

JavaScript(ES6) | TypeScript | React | React Router | Styled-component | Axios

## 실행 방법

1. npm start
2. /Westagram 실행

## What did I do

### 타입스크립트 활용

- TypeScript 기초 학습 후 프로젝트를 진행했습니다. [(학습 기록 링크)](https://github.com/Seokho0120/TypeScript_Study.git)
- Type와 Interface의 공통점 및 차이점을 학습 후 Interface를 주로 사용했습니다.
- Interface 관심사 분리를 통해 효율적으로 Type을 관리했습니다.

<img width="198" alt="스크린샷 2022-06-16 오후 6 33 01" src="https://user-images.githubusercontent.com/93597794/174040641-54daedc4-8e5a-4b5f-b01d-794192b1e277.png">

```javascript
// Interface.tsx

export interface ImageType {
  id: number;
  image: string;
  description: string;
}

export interface CommentsType {
  id: number;
  name: string;
  comments: string;
}

export interface IgetData {
  url: string;
}

export interface IResponse {
  id: number;
  image: string;
  name: string;
  description: string;
}
```

### 댓글 추가, 삭제 및 좋아요 기능

- 처음 렌더링되는 댓글 리스트에 새로운 id의 댓글이 추가됩니다.
- 댓글의 좋아요 혹은 삭제 클릭 시 id값을 활용해 상태를 변경했습니다.

![위스타그램 댓글 추가 좋아요 삭제](https://user-images.githubusercontent.com/93597794/174042528-5f0ed22b-97b8-4f15-a782-5405de9f4fc8.gif)

### Custom Hook & Axios

- 이전에 사용했던 Fetch와 Axios의 차이점을 학습 후 Axios를 활용했습니다.
- async / await를 이용해 비동기 통신을 순차적으로 실행했습니다.
- 프로그램 문제 발생 시 대처를 위한 try / catch 예외 처리를 진행했습니다.

```javascript
// useAxios.tsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import { IgetData, IResponse } from '../Type/Interface';

const useGetData = (url: IgetData) => {
  const [data, setData] = useState<IResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios(url)
          .then(res => {
            setData(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err: any) {
        setError(err);
        alert(err);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, [url]);

  return { data, error, isLoading };
};

export default useGetData;
```

### 반응형 구현

- 가변형 이미지 및 media query를 활용해 반응형 웹을 구현했습니다.

![위스타그램 반응형](https://user-images.githubusercontent.com/93597794/174042546-a97fd515-86d9-4832-a51e-313fcf124441.gif)

### 성능 최적화

- useCallback과 useMemo를 학습 후 useCallback을 사용해 최적화 구현했습니다.

```javascript
// MainCard.tsx

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

const removeComments = useCallback(
  (id: number) => {
    setCommentList(commentList.filter(comments => comments.id !== id));
  },
  [commentList]
);
```
