import styled, { css } from 'styled-components'

export const WrapperLogo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px;
    h1 {
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: ${theme.colors.palette.blue[300]};
      font-size: 38px;
    }
    ${theme.breakpoints.minWidth('xs')} {
      h1 {
        font-size: 44px;
      }
    }
    ${theme.breakpoints.minWidth('md')} {
      h1 {
        font-size: 88px;
      }
    }
  `}
`
