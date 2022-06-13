import styled from 'styled-components';
import { ImageType } from '../../src/Type/Interface';
import RecommendFriends from './RecommendFriends/RecommendFriends';

export default function Aside() {
  const profileImg: ImageType[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      description: '프로필 이미지',
    },
  ];

  return (
    <AsideContainer>
      <MyPropfile>
        {profileImg.map(profileImg => {
          return (
            <Profile
              src={profileImg.image}
              alt={profileImg.description}
              key={profileImg.id}
            />
          );
        })}
        <Name>Seokho__lee</Name>
      </MyPropfile>
      <Recommend>
        <p>회원님을 위한 추천</p>
        <p>모두 보기</p>
      </Recommend>
      <RecommendFriends />
    </AsideContainer>
  );
}

const AsideContainer = styled.section`
  width: 22%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 100px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
`;

const MyPropfile = styled.section`
  display: flex;
  align-items: center;
`;

const Recommend = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  margin-top: 12px;
  color: #949494;
`;

const Profile = styled.img`
  border-radius: 60%;
  width: 8%;
`;
