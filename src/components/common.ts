import styled from '@emotion/styled'
import { Card, Chip, IconButton } from '@mui/material'
import { NavLink } from 'react-router-dom';

interface IFlexProps {flexChild?: string, columns?: boolean, width?: string, padding?: string, space?: 'space-between' |'center'|'space-around'|'start'|'end'}

const columnFlow = ({ columns }: IFlexProps) => `flex-direction: ${columns ? 'column' : 'row'};`
const flexEl = ({flexChild}: IFlexProps) => flexChild && `
  > * {
    width: ${flexChild};
  }
`;

export const Flex = styled.div<IFlexProps>`
  display: flex;
  align-items: center;
  justify-content: ${({space})=> space || 'space-between'};
  padding: ${({padding}) => padding || '0 10px'};
  width: ${({width})=> width || '100%'};
  ${columnFlow}
  ${flexEl};
`
export const IconBtn = styled(IconButton)<{ isActive?: boolean, radius?: string, padding?:string, margin?:string }>`
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)'
      : '#2972fe1a'};
  border-radius: ${({radius}) => radius || '12px'};
  padding: ${({padding}) => padding || ''};
  ${({margin}) => margin && `margin: ${margin};`}
  &:hover {
    background: ${({ isActive }) =>
      isActive
        ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)'
        : '#2972fe1a'};
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({color}) => color || '#FFF'};
  &:hover {text-decoration: none;}
  align-self: flex-end;
`

export const CategoryItem = styled(Link)`
  background: #2972fe1a;
  border: 1px solid #282C49;
  border-radius: 20px;
  text-transform: capitalize;
  padding: .4em .2em;

  h3 {
    margin-bottom: 0;
    margin-top: .5em;
    font-size: 90%;
  }
`;

export const Heading = styled.header`
  color: #FFF;
  font-size: 125%;
`

export const Tag = styled(Chip)`
    background-color: transparent;
    border: 1px solid #2972FE;
    color: #2972FE;
    height: 21px;
    font-size: 70%;
`

export const Amount = styled.span`
  color: #2972FE;
  span {
    color: #FFF;
    font-size: 70%;
  }
`

export const Label = styled.label<{size?: string}>`
  color: #FFF;
  ${({size}) => size && `font-size: ${size};`}
  display: flex;
  align-items: center;
`

export const MuiCard = styled(Card)<{width?: string, margin?: string}>`
  width: ${({width}) => width || '48%'};
  ${({margin}) => margin && `margin: ${margin};`}
  border-radius: 20px;
  background-color: #131629;
  border: 1px solid #282C49;
`