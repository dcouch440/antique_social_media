import styled from 'styled-components';

export const Username = styled.div`
  color: white;
  font-size: 12px;
`;
export const AvatarContainer = styled.div`
  display: flex;
  padding: 0px 15px;
  align-items: center;
  box-shadow: 0 0 1px #ffffff54;
  background-color: #1c1c1c;
  height: 10%;
  min-height: 60px;
  > * {
    margin: 5px;
  }
`;

export const Avatar = styled.img`
  height: 26px;
  width: 26px;
  background-color: white;
  border-radius: 50%;
`;

export const UserContainer = styled.div`
  z-index: 99999;
  border-radius: 20px;
  flex-direction: column;
  height: 500px;
  max-height: 55%;
  background-color: #161616;
  right: 15px;
  top: 10%;
  overflow-y: auto;
  display: flex;
  position: absolute;
  box-shadow: -2px 1px 5px #ffffff1a;
`;