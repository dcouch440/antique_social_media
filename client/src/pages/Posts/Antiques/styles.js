import styled from 'styled-components';

export const Antique = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .title {
    padding: 5px 10px;
    margin-bottom: 5px;
    position: absolute;
    color: goldenrod;
    background-color: #000000d1;
    border: 1px solid black;
    border-radius: 10px;
  }
  img {
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;