import styled from 'styled-components';

export const Online = styled.div`
  position: absolute;
  bottom: 5px;
  opacity: ${({status}) => status ? '1' : '.4'};;
  right: 95px;
  font-family: monospace;
  color: ${({status}) => status ? '#00ae42' : 'dimgray'};
`;

export const AboutMe = styled.div`
  font-family: monospace;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin: 20px 0;
  display: flex;
  align-items: flex-end;
  flex: 1;
  padding: 5px 10px;
  border-bottom: 2px solid black;
`;

export const Avatar = styled.img`
  margin-left: auto;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  animation: online 5s;
`;