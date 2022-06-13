import React, { useState } from 'react';
import styled from 'styled-components';
import useGetData from '../../Hooks/useAxios';

export default function Recommends() {
  const { data, error, isLoading } = useGetData({
    url: 'http://localhost:3000/data/AsideContents.json',
  });
  if (isLoading) {
    return null;
  }
  if (error) {
    return <div>Error..</div>;
  }

  return (
    <>
      {data?.map(rec => {
        return (
          <RecommendContainer>
            <RecommendFriend>
              <RecommendProfile src={rec.image} key={rec.id} />
              <RecommendText>
                <RecommendName>{rec.name}</RecommendName>
                <RecommendDes>{rec.description}</RecommendDes>
              </RecommendText>
              <RecommendFollow>팔로우</RecommendFollow>
            </RecommendFriend>
          </RecommendContainer>
        );
      })}
    </>
  );
}

const RecommendContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 12px;
  font-size: 12px;
`;

const RecommendFriend = styled.div`
  display: flex;
  align-items: center;
`;

const RecommendProfile = styled.img`
  border-radius: 50%;
  width: 10%;
`;

const RecommendText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const RecommendName = styled.span``;

const RecommendDes = styled.span`
  font-size: 6px;
  color: #949494;
`;

const RecommendFollow = styled.p`
  font-size: 10px;
  margin-left: auto; // margin-left: auto - 왼쪽에 가능한한 가장 큰 마진을 준다 => 제일 오른쪽에 붙게된다.
  color: rgb(51, 143, 255);
`;
