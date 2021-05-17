import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const EmojiContainer = styled.div`
  display: grid;
  z-index: 9999;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .emoji {
    font-size: 23px;
    border-radius: 5px;
    transition: .3s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background-color: #ffffff24;
    }
  }
`;

export const PageSelect = styled.button`
  all: unset;
  cursor: pointer;
  box-shadow: inset 0 0 1px white;
  color: white;
  text-align: center;
  box-shadow: inset 0px -3px 5px #636363, inset 0px -3px 4px black;
  flex: 1;
  background-color: #292929;
  font-size: 19px;
  transition: .6s;
  :hover {
    background-color: dimgray;
    color: white;
  }
`;

export const ButtonContainer = styled.div`
display: flex;
height: 40px;
`;

export const EmojiDisplayContainer = styled.div`
  ${include.noInteraction}
  display: ${({ display }) => display};
  z-index: 9555444999;
  bottom: -10%;
  right: 120%;
  width: calc(370px + 100%);
  height: calc(430px + 300%);
  position: absolute;
  background-color: #1a1a1a;
  box-shadow: inset 0px -3px 5px #636363, inset 0px -3px 4px black;
  border: 1px solid white;
  border-radius: 15px;
  overflow: hidden;
`;