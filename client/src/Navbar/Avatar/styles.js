import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const PageContainer = styled.div`
  position: absolute;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
`;

export const BlurOverlay = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  backdrop-filter: blur(5px);
`;

export const AvatarPicture = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 50%;
`;

export const AvatarUpload = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
`;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 25%;
  left: 25%;
  background-color: black;
  padding: 5px;
  input {
    background-color: black;
    color: white;
  }
`;

export const Message = styled.div`
  ${include.cursiveFont}
  font-size: 76px;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid white;
  color: white;
  background-color: black;
`;
