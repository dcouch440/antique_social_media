import styled from 'styled-components';

export const Like = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 1px;
  margin: 0 1px;
  background-color: black;
  color: white;
  font-family: monospace;
  border-radius: 10px;
`;
export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  background-color: whitesmoke;
  border-radius: 50%;
`;
export const AntLikes = styled.div`
  background-color: #2020204a;
  border-radius: 3px;
  display: flex;
  overflow: auto;
  max-width: 100%;
  max-height: 37px;
  margin: 10px 0;
  padding: 7px 15px;;
  flex-wrap: wrap;
`;
export const NoLikes = styled.div`
  font-family: monospace;
  font-size: 14px;
`;