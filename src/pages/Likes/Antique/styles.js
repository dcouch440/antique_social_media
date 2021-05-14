import styled from 'styled-components';

export const AntiqueRow = styled.div`
  display: flex;
`;

export const Image = styled.div`
  border: 1px solid black;
  width: 200px;
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
  }
`;

export const About = styled.div`
  font-family: 'Pacifico';
  box-shadow: inset 0px 1px 6px 0px #00000057;
  padding: 5px;
  font-size: 15px;
  background-color: #292929;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;