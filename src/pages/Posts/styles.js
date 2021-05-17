import styled from 'styled-components';
import * as include from '../../styled-mixens';

export const Page = styled.div`
  ${include.screenAdapt}
  ${include.darkBackgroundColor}
  margin: 0 auto;
  min-height: calc(100vh - 60px);
`;

export const AntiquesList = styled.div`
  min-height: calc(100% - 60px);
  padding: 30px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 200px;
`;

export const PostsHeader = styled.div`
  ${include.pageHeader}
  margin: 0 auto;
`;