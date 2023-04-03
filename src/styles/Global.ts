import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
 :root{
    --color-primary: 131,111,255;
    --color-primary-focus: 0,0,205;
    --color-primary-negative:139,0,0;
    --color-aliceBlue-30: 240,248,255;
    --white: #FFF;
    --overlay: 0,0,0;
    --grey-0: 75,0,130;
    --grey-1: 134,142,150;
    --grey-2: 135,206,235;
    --grey-3: 0,255,255;
    --grey-4: 255,250,250;
    --sucess: 63,232,100;
    --negative:232,63,91;

    --title1: 18px;
    --title2: 16px;
    --title3: 14px;
    --headline: 12px;
    --headlineItalic: 12px;
    --label-mobile: 12px;
    --bold: 700;
    --medium: 500;
    --regular: 400;
    --helper: 10px
 }

 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body,html{
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(var(--grey-4),1);
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
 
  img{
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
`