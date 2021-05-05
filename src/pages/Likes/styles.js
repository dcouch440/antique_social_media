import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Page = styled.div`
  ${include.screenAdapt}
  padding-top: 5px;
  margin: 0 auto;
  overflow: hidden;
`;

export const AntiqueRows = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  grid-auto-rows: auto;
`;