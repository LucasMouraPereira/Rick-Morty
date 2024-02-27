import styled, { css } from 'styled-components'

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 16px;
`

export const Separator = styled.span`
  margin: 0 8px;
`

type BreadcrumbItemProps = {
  isActive: boolean
}

export const BreadcrumbItem = styled.span<BreadcrumbItemProps>`
  ${({ theme, isActive }) => css`
    color: ${isActive
      ? `${theme.colors.palette.green[300]}`
      : `${theme.colors.primary[50]}`};
    cursor: ${isActive ? 'auto' : 'pointer'};
    &:hover {
      color: ${isActive ? `${theme.colors.palette.green[300]}` : '#666'};
    }
  `}
`
