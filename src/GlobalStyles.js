import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
  :root {
    --max-page-width: 80%;
  }
	* {
    box-sizing: border-box;
	}
	html, body {
    height: calc(100vh - 60px);
    width: 100%;
    margin: 0;
    background-color: antiquewhite;
	}
	body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow: ${({stopScroll}) => stopScroll && 'hidden'};
	}
  #root {
    height: inherit;
    width: inherit;
  }
`;

export default GlobalStyles;