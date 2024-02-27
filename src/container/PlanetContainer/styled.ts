import styled, { css } from 'styled-components'

export const WrapperLocation = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  `}
`

export const Location = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: ${theme.typography.family.second};
    color: ${theme.colors.primary[50]};
    font-size: 16px;
  `}
`

export const WrapperImage = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
    max-width: 200px;
    height: 200px;
  `}
`

export const WrapperText = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    P {
      &:before {
        content: '•';
      }
    }
  `}
`

export const WithoutResidents = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 24px;
      text-align: center;
    }
  `}
`

export const WrapperGif = styled.div`
  ${() => css`
    position: relative;
    width: 100%;
    max-width: 200px;
    height: 200px;
  `}
`
