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
