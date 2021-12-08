import * as include from '../../styled-mixens';

import styled from 'styled-components';

export const Page = styled.div`
  ${include.screenAdapt}
  ${include.darkBackgroundColor}
  padding: 15px;
  padding-top: 5px;
  margin: 0 auto;
  min-height: 100%;
`;

export const AntiqueRows = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: dense;
  grid-auto-rows: auto;
`;

export const LikesHeader = styled.h1`
  margin: 0;
  padding: 0;
  all: unset;
  ${include.maxCenter}
  ${include.cursiveFont}
  position: relative;
  grid-row: span 1;
  grid-column: span 2;
  font-size: 80px;
  filter: grayscale(20%);
  color: white;
  background-position: center;
`;