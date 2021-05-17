import styled from 'styled-components';

export const Rows = styled.div`
  width: 100%;
  height: 80%;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-height: 900px) {
    height: 75%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 10px;
  > * { margin: 2px; }
`;

export const GoBack = styled.button`
  all: unset;
  z-index: 999;
  color: whitesmoke;
  font-family: monospace;
  cursor: pointer;
  position: fixed;
  right: 15px;
  margin-top: 15px;
  background-color: transparent;
  :hover {
    text-shadow: 0 0 3px whitesmoke;
  }
`;

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  background-color: #69696985;
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
  width: 80%;
  display: flex;
  align-items: center;
  > * { margin: 2px; }

  @media (max-width: 900px) {
    width: 75%;
  }
`;

export const Time = styled.span`
  color: dimgray;
  font-size: 14px;
  margin: 5px;
`;
