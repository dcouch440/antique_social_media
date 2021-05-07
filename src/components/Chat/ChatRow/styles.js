import styled from 'styled-components';

export const Rows = styled.div`
  width: 100%;
  height: 79%;
  background-color: black;
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
`;

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
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const MessageContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  > * { margin: 2px; }
`;

export const Time = styled.span`
  color: dimgray;
  font-size: 14px;
  margin: 5px;
`;
