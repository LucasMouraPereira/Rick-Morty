'use client'
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
    }
    html,
    body {
      box-sizing: border-box;
      scroll-behavior: smooth;
      font-size: 16px;
      font-family: ${theme.typography.family.primary};
      background-image: url('/images/cielo-estrellado.jpg');
      height: 100vh;
      color: ${theme.colors.palette.green[300]};
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.palette.green[300]};
      border-radius: 8px;
    }
    body.scroll-hide::-webkit-scrollbar {
      display: none;
    }
    body.scroll-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    a {
      text-decoration: none;
      color: unset;
    }
  `}
`
