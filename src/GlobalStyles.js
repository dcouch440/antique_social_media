import { createGlobalStyle } from  'styled-components';

const GlobalStyles = createGlobalStyle`
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
  ::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: linear-gradient(180deg ,rgb(0 0 0 / 35%) 0%,rgb(0 0 0 / 57%) 74%);
  }
`;

export default GlobalStyles;