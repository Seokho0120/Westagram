### 칭찬해 주고 싶은 점

- 타입스크립트

  - 새로운 기술을 학습할때 기초 학습 후 직접 코드를 작성해보며 성공과 실패를 경험하는 것은 성장의 지름길이라고 생각함. 처음에 어려움을 많이 느꼈음 초기 세팅부터 이전과 달라서 힘들었고, state와 인자 등 모든 곳에서 예상하지 못한 에러가 계속 발생해서 쉽지 않았음. 중간중간에 페이지와 기능별로 리팩토링을 하면서 진행했는데, props를 전달하는 것도 쉽지 않아 전전긍긍 했었음.
    이번 프로젝트를 통해서 아직 완벽하진 않지만, 타입스크립트와 친숙해질 수 있었고 타입스크립트를 사용하는 이유와 방법에 대해 학습할 수 있었음.

- 실력 향상

  - 나와 같은 구직자들은 코딩 테스트, 이력서, 면접 등 준비해야할 것들이 매우 많기 때문에 새로운 프로젝트를 진행할지 말지에 대한 의견이 다양하다. 나 또한 그랬기에 현직자들의 멘토링과 조언을 많이 받았는데, 대부분 새로운 프로젝트를 시작하지 말고 이전 프로젝트를 리팩토링해서 업그레이드가 더 중요하다는 조언이 대부분이었다. 프로젝트를 끝난 후 나 또한 이 의견에 동의하게 되었다.

  이유는 첫번째로, 생각보다 많은 고민이 필요하다.

  - 왜냐하면 이전에 작성했던 코드들을 다시 분석하면서 틀렸던 부분은 수정하고 부족했던 부분은 추가했는데, 이 과정에서 예상하지 못한 고민과 학습이 필요했다. 새로운 프로젝트를 진행하는 것도 당연히 많은 고민이 필요하지만, 시간이 소중한 구직자 입장에서는 이전의 프로젝트를 리팩토링하는게 훨씬 효율적이라고 느꼈다.
    두번째, 성취감이 크다.
  - 나는 소위 '성취주의자' 라고 부를만큼 성취감을 통해 삶의 활력을 느끼는 사람이고, 커리어 전환을 하게된 이유 중 하나이기도 하다.
    나와 같이 하루 하루 열심히 노력하는 구직자들은 체감하지 못할 수 있지만, 분명 실력이 조금씩 늘고 있다. 하지만 피부로 와닿을 정도로 느끼지 못하는 경우가 많은데, 나는 이번 프로젝트를 하면서 아직 부족하지만 이전보다 실력이 많이 늘었다는 것을 제대로 알게 되었다.
    예전에는 어떻게 시작해야할지도 감이 안왔던 기능의 전체적인 로직을 어느정도 구현할 수 있게 되었고, 이전에는 고민 조차 할 수 없었던 기술을 사용해볼까 라는 생각까지 할 수 있게 되었다. 개인적으로 이 부분에서 나름 성장했구나 라고 느꼈는데, 이번 프로젝트에서 페이지네이션은 처음부터 생각하지 않고 시작을 했다. 하지만 프로젝트 막바지에 처음부터 MainCard를 공통컴포넌트로 만들고 Mock Data를 활용해서 Card의 내용의 api를 받아왔으면 좋았겠다 라는 생각을 하게 되었다. 더불어 서치 부분에서도 검색을 하면 Aside에 있는 추천인들을 검색할 수 있게 한다거나, 좋아요의 Count를 보여준다거나 등등 다양한 아이디어를 고민할 수 있게 되었다.
    이러한 성장과 고민을 통해 너무나도 큰 성취감을 느끼게 되었고, 다시 한번 개발에 재미와 흥미를 갖게 되었다.
    개발자하길 정말 잘했다~ 아 재밌다!

  ### 개선하고 싶은 점

- 리팩토링

  - 페이지 네이션: 프로젝트 막바지에 페이지네이션을 구현하면 좋겠다 싶었는데, 초기 설계가 페이지네이션을 고려하지 않고 진행해서 시간이 오래 걸릴 것으로 예상, 그래서 이후에 진행 예정.

- 성능
  - useMemo, useCallback: 면접용으로 공부만 해봤지 실제로 사용한 것은 처음이었음. 하지만 토이 프로젝트라서 실제로 체감이 크진 않지만, 이번 경험으로 언제 사용해야 하는지에 대해 배웠음.
  - 성능 및 렌더링 최적화 관련 방법과 기술이 다양한데, 학습하면서 진행해보고 싶음. 레이지로딩 등등

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
계속 이미지 로드가 안됨

import img from '../assets/img.jpg';
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
