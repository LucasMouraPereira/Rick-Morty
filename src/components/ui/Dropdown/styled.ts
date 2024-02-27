import styled, { css } from 'styled-components'

export const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 16px;
`

export const DropdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    gap: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: ${theme.typography.family.second};
    background-color: ${theme.colors.palette.green[300]};
    color: ${theme.colors.second[50]};
    color: black;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 2px 2px 0 0;
  `}
`

type DropdownContentProps = {
  isOpen: boolean
}

export const DropdownContent = styled.div<DropdownContentProps>`
  ${({ isOpen, theme }) => css`
    display: ${isOpen ? 'block' : 'none'};
    font-family: ${theme.typography.family.second};
    background-color: ${theme.colors.palette.green[300]};
    color: ${theme.colors.second[50]};
    width: 100%;
    max-width: 322px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    overflow: auto;
    height: ${isOpen ? '156px' : 0};
    transition: all 0.8s ease-in-out;
  `}
`

export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
