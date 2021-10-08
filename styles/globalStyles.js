import { css } from '@emotion/react';

const reset = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #281f62;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: 100vh;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const myGlobalStyles = css`
  ${reset}

  button {
    background-color: #f9caca;
    padding: 0.5em;
    border-radius: 32px;
    border-color: pink;
    color: darkorchid;
    font-size: 1em;
    width: 25em;
    max-width: 80vw;
    cursor: pointer;
    &:active {
      transform: scale(1.05);
    }
    &:hover {
      opacity: 0.6;
    }
  }
  .h2 {
    color: darkorchid;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .h4 {
    color: magenta;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 10px;
  }
  .links {
    display: flex;
  }
  .icon {
    border-radius: 50%;
  }
  .img {
    width: 100vh;
    height: 100wh;
    border-radius: 50%50%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 8px;
    width: 180px;
  }
`;
