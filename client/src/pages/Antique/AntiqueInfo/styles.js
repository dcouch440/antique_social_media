import * as include from '../../../styled-mixens';

import styled from 'styled-components';

export const Page = styled.div`
  position: inherit;
  display: grid;
  min-height: 100%;
  grid-auto-rows: 50%;
  width: 100%;
  grid-template-columns: repeat(2,1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1,1fr);
    grid-auto-rows: unset;
  }
`;

export const About = styled.div`
  font-family: 'New Tegomin', serif;
  box-shadow: inset 0 0 4px #ffffff0d;
  background-color: #0088ff03;
  color: black;
  height: calc(100vh - 65px);
  min-height: 100%;
  width: 100%;
  padding: 30px;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Blog = styled.div`
  ${include.scrollBarStyles}
  ${include.textInteraction}
  box-shadow: inset 0 0 4px #ffffff0d, 0 0 6px white;
  flex: 5;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: white;
  border-radius: 5px;
  font-size: 20px;
  white-space: pre-line;
  padding: 15px;
  > * {
    font-family: monospace;
    margin: 15px 0px;
  }
`;

export const Tag = styled.span`
  font-weight: 900;
  font: message-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const RouteButton = styled.button`
  all: unset;
  z-index: 5;
  cursor: pointer;
  ${include.cursiveFont}
  border: 1px solid white;
  border-radius: 15px;
  padding: 5px;
  font-size: 15px;
  top: 5%;
  color: white;
  transition: .2s;
  @media (max-width: 1500px) {
    top: 2%;
    right: 39%
  }
  @media (max-width: 1000px) {
    top: 20%;
    right: 2%;
    background-color: #00000090;
    border: 1px solid white;
    border-radius: 15px;
    font-size: 12px;
    padding: 7px;
  }
  :hover {
    background-color: white;
    color: black;
  }
`;

export const SlideShowSide = styled.div`
  position: relative;
  overflow: hidden;
  grid-row: span 2;
  height: calc(100vh - 65px);
  width: 100%;
`;

export const LikedComponentContainer = styled.div`
  position: absolute;
  z-index: 2;
  right: 15px;
  top: 15px;
`;

