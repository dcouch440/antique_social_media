import styled from 'styled-components';

export const Grid = styled.div`
  padding-top: 20px;
  display: grid;
  grid-gap: 5px;
  width: 1500px;
  margin: 0 auto;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2,  1fr);


  @media (max-width: 1500px) {
    width: 1200px;
  }
  @media (max-width: 1200px) {
    width: 1000px;
  }
  @media (max-width: 1100px) {
    width: 900px;
  }

  @media (max-width: 1000px) {
    width: 700px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1,  1fr);
    width: 95%;
  }

`;