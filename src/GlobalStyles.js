import { createGlobalStyle } from 'styled-components';
import * as include from './styled-mixens';

const GlobalStyles = createGlobalStyle`
  ${include.scrollBarStyles}
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
  html {

  }
	body {
    -webkit-font-smoothing: antialiased;
    overflow-y: ${({ scroll }) => scroll};
    overflow-x: hidden;
	}
  #root {
    margin-top: 55px;
    padding-top: 5px;
    height: inherit;
    width: inherit;
  }

`;

export default GlobalStyles;