import styled, { css } from 'styled-components'

export const WrapperHome = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 85vh;
    a {
      font-size: 28px;
    }
    ${theme.breakpoints.minWidth('md')} {
      height: 80vh;
      flex-direction: row;
      a {
        font-size: 42px;
      }
    }
  `}
`

export const WrapperImage = styled.div`
  ${() => css`
    position: relative;
    min-height: 500px;
    max-width: 526px;
    width: 100%;
  `}
`
type LinksProps = {
  selected: boolean
}

export const Links = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    :hover {
      opacity: ${selected ? '0.5' : '1.0'};
    }
    a {
      font-family: ${theme.typography.family.second};
      color: ${theme.colors.primary[50]};
      display: flex;
      flex-direction: row;
      gap: 8px;
      cursor: pointer;
      text-decoration: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      svg {
        path {
          width: 18px;
        }
      }
    }
    ${theme.breakpoints.minWidth('lg')} {
      a {
        justify-content: center;
      }
    }
  `}
`

export const SelectedContent = styled.div<LinksProps>`
  ${({ theme, selected }) => css`
    margin-top: 3px;
    border: ${selected ? '1px' : '0px'} solid ${theme.colors.palette.green[300]};
    transition: transform 0.5s ease-out;
    transform-origin: right center;
    transform: translateX(${selected ? '0%' : '100%'});
  `}
`
