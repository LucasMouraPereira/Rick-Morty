import styled, { css } from 'styled-components'

export const WrapperContainer = styled.main`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.spacings.container.sm};

    ${theme.breakpoints.minWidth('md')} {
      max-width: ${theme.spacings.container.md};
    }

    ${theme.breakpoints.minWidth('lg')} {
      max-width: ${theme.spacings.container.lg};
    }

    ${theme.breakpoints.minWidth('xl')} {
      max-width: ${theme.spacings.container.xl};
    }

    ${theme.breakpoints.minWidth('xxl')} {
      max-width: ${theme.spacings.container.xxl};
    }
  `}
`
