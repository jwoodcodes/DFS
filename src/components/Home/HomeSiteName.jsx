import React from 'react';
import styled from 'styled-components';

function HomeSiteName(props) {
  return (
    <SiteNameContainer>
      <SiteName>
        <Daily>Daily</Daily>
        <Spacer></Spacer>
        <Dynasties>Dynasties</Dynasties>
      </SiteName>
    </SiteNameContainer>
  );
}

const SiteName = styled.h1`
  /* display: flex;
  justify-content: space-around; */
  width: 80%;
  margin-left: 12vw;
  margin-right: auto;

  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 2rem; */

  display: flex;
  justify-content: center;

  letter-spacing: 0.3rem;
`;

const SiteNameContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const Daily = styled.div`
  margin-left: 6rem;
  background: linear-gradient(to right bottom, #212f45, #3e1f47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Spacer = styled.div`
  background-image: linear-gradient(to right bottom, #3e1f47, #065a60);
  width: 8vw;
  height: 2vh;
  align-self: flex-end;

  border-radius: 3rem;
`;

const Dynasties = styled.div`
  background: linear-gradient(to right bottom, #065a60, #212f45);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default HomeSiteName;
