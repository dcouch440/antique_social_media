import * as include from '../../../styled-mixens';

import styled from 'styled-components';

export const Online = styled.div`
  position: absolute;
  bottom: 5px;
  opacity: ${({ status }) => status ? '1' : '.4'};;
  right: 95px;
  font-family: monospace;
  color: ${({ status }) => status ? '#00ae42' : 'dimgray'};
`;

export const AboutMe = styled.div`
  font-family: monospace;
  color: white;
  ${include.textInteraction}
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 1;
  padding: 5px 10px;
  border-bottom: 1px solid white;
`;

export const Avatar = styled.img`
  margin-left: auto;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  animation: online 5s;
`;

