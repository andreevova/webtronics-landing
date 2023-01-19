import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: none;
  }
  
  :focus, :active {
    outline: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  html, body {
    max-width: 100vw;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: white;
    background-color: #0C102D;
    background-image: url('/bg-front.png'), url('/bg.png');
    background-repeat: no-repeat, no-repeat;
    background-position: center top, top center;
    background-size: 1225px, 1920px;
    overflow-x: hidden;
  }

  #__next {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }
`
