import styled from 'styled-components';
import * as include from '../../../styled-mixens';

export const Users = styled.div`
  width: 33%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  .user-number {
    font-family: monospace;
  }
`;
export const Room = styled.div`
  ${include.cursiveFont}
  background-color: black;
  display: flex;
  color: white;
  justify-content: space-between;
  cursor: pointer;

  // in name for animations
  .name {
    display: flex;
    width: 33%;
    height: 100%;
    align-items: center;
    padding-left: 10px;
    font-size: 40px;
    align-self: center;
    transition: .5s;
  }
  :hover {
    .name {
      padding-left: 20px;
    }
  }
`;

export const AntiqueImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 33%;
`;

export const Name = styled.div`
  display: flex;
  border: 2px solid red;
  width: 33%;
  height: 100%;
  align-items: center;
  padding-left: 10px;
  font-size: 40px;
  align-self: center;
  transition: .5s;
  :hover {
    padding-left: 20px;
  }
`;

export const NoRooms = styled.div`
  ${include.cursiveFont};
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  color: white;
`;
