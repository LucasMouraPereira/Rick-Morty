import styled, { css } from 'styled-components'

export const WrapperContact = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-family: ${theme.typography.family.second};
    color: ${theme.colors.primary[50]};
    padding: 16px;
    ${theme.breakpoints.minWidth('md')} {
      flex-direction: row;
    }
  `}
`

export const Contact = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 26px;
    h2 {
      padding-bottom: 42px;
    }
  `}
`

export const WrapperIcons = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`

export const IconList = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    span {
      color: ${theme.colors.palette.green[300]};
    }
  `}
`
