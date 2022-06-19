## 블로커

1. 타입스크립트 사용 방법

- 스타일컴포넌트 사용 시 타스
- props 전달 시 타스

https://keeper.tistory.com/49 타스 리액트 링크

2. useCallback & useMemo

- 사용 이유, 방법, 언제 사용?

3. axios와 customHook

- axios와 fetch의 차이점

  - https://naon.me/posts/til114 axios 학습

- 예외 처리 사용 이유, 사용 방법

  - https://webclub.tistory.com/71 예외처리 학습

- customHook 사용 이유, 사용 방법

  - https://ywtechit.tistory.com/263 참고 링크

  - https://velog.io/@kangko05/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%9B%85%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4-axios%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%9B%EC%95%84%EC%98%A4%EA%B8%B0 참고 링크

위스타그램 전체 참고 링크
https://yonyas.github.io/Projects/[React]%20%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8/#%EC%9D%B8%EC%8A%A4%ED%83%802-2-2

```javascript
const FeedIcons = styled.section<{ isChecked: boolean, is: string }>`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 24px;
  // ${({isChecked}) => }
  // 한개 이상의 props는 받아올 수 없기 떄문에 한개 이상 받아올때는 interface로 써야함
`;
```

```javascript
export default function MainComments({ commentItem }: IProps) {
  // export default function MainComments({ commentItem }: { comment: string }) { // props가 1개 일때
  // export default function MainComments(props: { comment: string }) { // 이렇게 쓰면 안됨, props받는 자식 컴포넌트에서 props의 타입을 지정해줘야함
  return (
    <li>
      Seokho__lee {commentItem}
      <FiHeart></FiHeart>
    </li>
  );
}

// 나중에 공부해보기
// 리액트쿼리
```

```javascript
// useCallback 사용

const addFeedComment = useCallback(() => {
  if (!comment) return;
  setCommentList([...commentList, comment]);
  setComment(''); // 엔터 후 input 새로고침
}, [comment, setComment, commentList, setCommentList]);

// const addFeedComment = () => {
//   if (!comment) return;
//   setCommentList([...commentList, comment]);
//   setComment(''); // 엔터 후 input 새로고침
// };

const updateComment = useCallback(
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  },
  [setComment]
);
```

```javascript
const HeartHandler = () => {
    setActiveHeart(!activeHeart);
  };

  좋아요 버튼 로직 어떻게 재사용 가능할지 고민중 -> 커스텀 훅 알아보기
```

```javascript
삭제 기능 고민..

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

{TEST.map((item, idx) => {
  return <Test key={idx}>{item.comments}</Test>;
})}

댓글 삭제를 하려면 어떻게 해야할까?
특정 댓글을 인지할 수 있어야 삭제가 가능 -> 각각 id를 부여해 해당 id의 댓글 삭제

https://velog.io/@eunjin/React-Project-Instagram-Clone-Project-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8
```

```javascript
fetch 쓰려다가 더 장점이 있는 axios를 사용함
사용 방법은 사실 비슷해서 커스텀훅을 만들어봄
커스텀훅 작성하며 예외처리

// https://webclub.tistory.com/71 - 예외처리
// 이전 코드
const [asideMember, setAsideMember] = useState<AsideType[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data/AsideContents.json');
    // .then((res: AsideType[]) => setAsideMember(res));
    // .then(res => console.log(res.data));
    // console.log(asideMember);
  }, []);
```

```javascript
// axios
https://naon.me/posts/til114
https://www.notion.so/axios-c69b7cba7ca54efd847d2e3bd041ef1c

// mock data
https://www.notion.so/wecode/React-Mock-Data-c19fbb1a07c14f049c120ec818e847ee

// css
https://shlrur.github.io/develog/2019/01/23/how-arrange-elements-horizontally-flexbox/
```

### 나중에 lighthouse도 돌려서 이전꺼랑 비교하기
