import styled, { css } from 'styled-components'

export const WrapperCard = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.typography.family.second};
    color: ${theme.colors.second[50]};
    img {
      border-radius: 20px;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;
      padding: 12px 32px;
    }
  `}
`
