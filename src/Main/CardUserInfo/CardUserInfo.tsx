import React from 'react';
import styled from 'styled-components';
import { ImageType } from '../../Type/Interface';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

export default function CardUserInfo() {
  const profileImg: ImageType[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
      description: '프로필 이미지',
    },
  ];

  return (
    <CardProfile>
      <ProfileContents>
        {profileImg.map((item, idx) => {
          return <Profile src={item.image} alt={item.description} key={idx} />;
        })}
        <Name>Seokho_lee</Name>
      </ProfileContents>
      <IoEllipsisHorizontalSharp className="logo" />
    </CardProfile>
  );
}

const CardProfile = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-size: 28px;
  }
`;

const ProfileContents = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 4%;
`;

const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
`;
