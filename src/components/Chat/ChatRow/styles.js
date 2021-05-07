import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: #111111;
  color: white;
  padding: 10px 10px;
  > * { margin: 2px; }
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const Username = styled.span`
  font-family: monospace;
  font-weight: bold;
`;

export const Message = styled.span`
  font-family: Arial, Helvetica, sans-serif;
`;

export const MessageContainer = styled.div`
  width: 90%;
  display: flex;
`;
