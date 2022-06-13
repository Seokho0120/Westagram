### 나중에 lighthouse도 돌려서 이전꺼랑 비교하기

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

// 면접 질문 필수 준비
// 타입이랑 인터페이스 차이
// 타입 언노운, 보이드, 네버 차이

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
계속 이미지 로드가 안됨

import img from '../assets/img.jpg';

```
