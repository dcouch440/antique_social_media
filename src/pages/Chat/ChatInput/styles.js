import styled from 'styled-components';

export const ChatWindow = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px;
  color: whitesmoke;
  font-size: 21px;
  resize: none;
  box-shadow: inset 0 0 1px black;
  background-color: #1d1d1d;
  border: 1px solid black;
`;

export const ChatBox = styled.div`
  height: 20%;
  bottom: 0;
  position: fixed;
  width: 100%;
  @media (max-height: 900px) {
    height: 25%;
  }
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  z-index: 5000;
  background-color: white;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 0 0 2px black;
  font-family: 'Pacifico', cursive;
  color: black;
  font-weight: bold;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 2px solid black;
  padding: 5px;
  :hover {
    background-color: black;
    color: white;
  }
  @media (max-height: 900px) {
    bottom: 20px;
    right: 10px;
    padding: 2px;
  }
`;