import styled from 'styled-components';
import { HiDotsHorizontal } from 'react-icons/hi';
import { profileImg } from '../../Data/FixImg';

export default function CardUserInfo() {
  return (
    <CardProfile>
      <ProfileContents>
        <>
          {profileImg.map(profileImg => {
            return (
              <Profile
                src={profileImg.image}
                alt={profileImg.description}
                key={profileImg.id}
              />
            );
          })}
          <Name>Seokho_lee</Name>
        </>
        <HiDotsHorizontal className="logo" />
      </ProfileContents>
    </CardProfile>
  );
}

const CardProfile = styled.section`
  display: flex;
  align-items: center;
  padding: 8px;

  .logo {
    font-size: 16px;
    margin-left: auto;
  }
`;

const ProfileContents = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  border-radius: 50%;
  width: 8%;
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: 8px;
`;
