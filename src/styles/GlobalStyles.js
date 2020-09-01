import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }
  *, button, input{
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  html{
    background: var(--primary);
    color: var(--text-color);
  }
  :root{
    --primary: #FEFEFE;
    --secondary: #E5E5E5;
    --search: #202327;
    --white: #FEFEFE;
    --text-color: #212121;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --github: #00A046;
    --github-dark-hover: #008012;
    --github-light-hover: #00C268;
  }
`;
