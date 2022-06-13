import React, { useState } from 'react';
import styled from 'styled-components';
import useGetData from '../Hooks/useAxios';

export default function Aside() {
  const { response, error, isLoading } = useGetData({
    url: 'http://localhost:3000/data/AsideContents.json',
  });

  if (isLoading) {
    return null;
  }

  if (error) {
    return <div>Error..</div>;
  }

  return (
    <AsideContainer>
      <MyPropfile>Seokho__lee</MyPropfile>
      {/* {response?.map((item, idx) => {
        return <AsideContainer></AsideContainer>;
      })} */}
    </AsideContainer>
  );
}

const AsideContainer = styled.section`
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;
  margin-top: 100px;
  background-color: white;
`;

const MyPropfile = styled.section``;
