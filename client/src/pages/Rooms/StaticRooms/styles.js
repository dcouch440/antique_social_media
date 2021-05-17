import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const Room = styled.div`
  ${include.cursiveFont}
  background-image: url(${({ backgroundImg }) => backgroundImg });
  filter: grayscale(30%);
  background-position: center;
  background-size: cover;
  display: flex;
  padding: 15px;
  color: white;
  box-shadow: inset 0 0 5px black;
  transition: .5s;
  :hover {
    overflow: hidden;
  }
`;

export const RoomId = styled.div`
  font-weight: 300;
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2px;
  height: 80%;
  justify-content: space-between;
  font-size: 20px;
  padding: 15px;
  margin: auto;
  background-color: #000000de;
  border: 1px solid #daa520b5;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s;
  .room-name {
    font-weight: 900;
    font-size: 24px;
  }
  :hover {
    padding-left: 30px;
    color: white;
    text-shadow: 0 0 2px white;
    overflow: hidden;
  }
`;

export const Users = styled.div`
  font-size: 36px;
  display: flex;
  align-items: center;
  .user-number {
    margin-left: 5px;
    font-family: monospace;
  }
`;
