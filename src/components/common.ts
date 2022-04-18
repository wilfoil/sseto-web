import styled from '@emotion/styled'
import { IconButton } from '@mui/material'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const IconBtn = styled(IconButton)<{ isActive?: boolean }>`
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)'
      : 'rgba(41, 114, 254, 0.1)'};
  border-radius: 12px;

  &:hover {
    background: ${({ isActive }) =>
      isActive
        ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)'
        : 'rgba(41, 114, 254, 0.1)'};
  }
`
