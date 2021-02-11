import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
     outline: none;
     margin: 0;
     padding: 0;
     text-rendering: optimizeLegibility;
 }

 body {
    background: linear-gradient(90deg, rgba(33, 37, 41, 0.6) 0%, rgba(33, 37, 41, 0.24) 100%);
    backdrop-filter: blur(23px);
    width: 100vw;
    height: 100vh;
 }

`;