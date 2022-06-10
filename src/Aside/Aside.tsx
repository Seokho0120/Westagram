import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export default function Aside() {
  // const [asideMember, setAsideMember] = useState()

  //   useEffect(() => {
  //     fetch('http://localhost:3000/data/AsideContents.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setAsideMember(data);
  //   }, []);

  return <AsideContainer>하하하</AsideContainer>;
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
