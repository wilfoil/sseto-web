import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const IconBtn = styled(IconButton)<{ isActive: boolean }>`
background-color: ${({isActive}) => isActive ?  rgba(41, 114, 254, 0.1)};
border-radius: 12px;

&:hover { background-color: rgba(41, 114, 254, 0.1); }
`