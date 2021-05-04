import styled from 'styled-components';

export const AntiqueRow = styled.div`
  display: flex;
`

export const Image = styled.img`
  border: 1px solid black;
  height: auto;
  object-fit: cover;
  width: 240px;
  box-shadow: inset 0 0 50px black;
`;

export const About = styled.div`
  color: black;
  font-family: 'Pacifico';
  box-shadow: inset 0px 1px 6px 0px #00000057;
  padding: 5px;
  background-color: #c8c8c8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`