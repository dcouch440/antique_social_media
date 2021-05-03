import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const Page = styled.div`
  position: inherit;
  display: grid;
  height: inherit;
  grid-auto-rows: 50%;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1,1fr);
  }
`

export const About = styled.div`
  font-family: 'New Tegomin', serif;
  color: black;
  height: 100%;
  width: 100%;
  padding: 15px;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Blog = styled.div`
  ${include.scrollBarStyles};
  flex: 5;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;

  > * {
    font-family: monospace;
    margin: 15px 0px;
  }
`

export const Tag = styled.span`
  font-weight: 900;
  font: message-box;
`
