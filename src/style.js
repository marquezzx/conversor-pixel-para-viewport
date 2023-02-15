import styled, { createGlobalStyle } from 'styled-components';

export const Header = styled.div`
    nav {
        width: 100%;
        height: 12.5vh;
        text-align: center;
        margin: 0 auto;
        background: #111;
        display: flex;
        align-items: center;
        justify-content: center;
        & h1 {
            font-family: 'AmpleSoft Pro', sans-serif;
            margin: 2.5vh;
            font-size: 1.3rem;
            transition: 1s;
            color: white;
        }
    }   
`

export const Main = styled.div`
    min-height: 78vh;
    margin: 40px;
    text-align: center;
    & a {
        color: rgb(15, 131, 0);
        text-decoration: none;
    }
    & input[type=number]::-webkit-inner-spin-button,
    & input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    & .pixelToVH,
    .pixelToVW,
    .vwToPixel,
    .vhToPixel {
        width: 160px;
        height: 35px;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
        margin: 10px;
        background: rgb(15, 131, 0);
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    & input {
        color: #ffffff;
        font-size: 18px;
    }

    & input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }

    & .text {
        display: inline-block;
        padding-bottom: 10px;
        margin-top: 12px;
        color: #000;
        text-decoration: none;
        border-bottom: solid 2px rgb(15, 131, 0);
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 600;
    }

    & .result {
        font-family: 'Montserrat', sans-serif;
        display: inline-block;
        margin-top: -7px;
        color: #000;
        text-decoration: none;
        font-size: 15px;
        font-weight: 600;
    }
`

export const GlobalStyle = createGlobalStyle`
  * {
    font-weight: bold;
  }

  body {
    background-color: #fff;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 500px) {
    nav h1 {
      font-size: 1.5rem;
    }
  }
`;