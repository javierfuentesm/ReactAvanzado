import styled, { css } from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  transition: color0.5s ease;
  & svg {
    margin-right: 4px;
  }
  ${props =>
    props.isOver &&
    css`
      color: red;
    `}
`
