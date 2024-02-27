import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Locations = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `}
`
type WrapperLocationProps = {
  topDesk: string
  leftDesk: string
  topMob: string
  leftMob: string
}
export const WrapperLocation = styled.div<WrapperLocationProps>`
  ${({ theme, topDesk, leftDesk, topMob, leftMob }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${theme.typography.family.second};
    color: ${theme.colors.primary[50]};
    font-size: 10px;
    position: absolute;
    top: ${topMob};
    left: ${leftMob};
    animation: ${fadeIn} 1s ease-in;
    img {
      object-fit: contain;
    }
    ${theme.breakpoints.minWidth('xl')} {
      top: ${topDesk};
      left: ${leftDesk};
      font-size: 12px;
    }
  `}
`
