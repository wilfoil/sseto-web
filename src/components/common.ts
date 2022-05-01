import styled from '@emotion/styled'
import { Card, Chip, Divider, IconButton, OutlinedInput } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface IGenericProps {
  width?: string
  padding?: string
  sticky?: boolean
  absolute?: boolean
  relative?: boolean
  top?: string
  zIndex?: string
  bg?: string
}

interface IFlexProps {
  flexChild?: string
  columns?: boolean
  space?: 'space-between' | 'center' | 'space-around' | 'start' | 'end'
  align?: 'flex-start' | 'flex-end'
}

const columnFlow = ({ columns }: IFlexProps & IGenericProps) => `flex-direction: ${columns ? 'column' : 'row'};`
const flexEl = ({ flexChild }: IFlexProps & IGenericProps) =>
  flexChild &&
  `
  > * {
    width: ${flexChild};
  }
`
const genericStyles = ({padding, width, ...props}: IGenericProps) => {
  const paddingCss = padding ? `padding: ${padding};` : 'padding: 0 10px;';
  const widthCss = width ?  `width: ${width}` : 'width: 100%;';
  let position = '';
  let zIndex = ''
  let top = ''
  let bg = ''
  if(props.sticky) position = 'position: sticky;'
  if(props.absolute) position = 'position: absolute;'
  if(props.relative) position = 'position: relative;'
  if(props.zIndex) zIndex = `z-index: ${props.zIndex};`
  if(props.top) top = `top: ${props.top};`
  if(props.bg) bg = `background-color: ${props.bg};`
  return `
    ${paddingCss}
    ${widthCss}
    ${position}
    ${zIndex}
    ${top}
    ${bg}
  `
}

export const Flex = styled.div<IFlexProps & IGenericProps>`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ space }) => space || 'space-between'};
  ${genericStyles};
  ${columnFlow}
  ${flexEl};
`
export const IconBtn = styled(IconButton)<{
  isActive?: boolean
  radius?: string
  padding?: string
  margin?: string
}>`
  background: ${({ isActive }) =>
    isActive ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)' : '#2972fe1a'};
  border-radius: ${({ radius }) => radius || '12px'};
  padding: ${({ padding }) => padding || ''};
  ${({ margin }) => margin && `margin: ${margin};`}
  &:hover {
    background: ${({ isActive }) =>
      isActive ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)' : '#2972fe1a'};
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ color }) => color || '#FFF'};
  &:hover {
    text-decoration: none;
  }
  align-self: flex-end;
`

export const CategoryItem = styled(Link)`
  background: #2972fe1a;
  border: 1px solid #282c49;
  border-radius: 20px;
  text-transform: capitalize;
  padding: 0.4em 0.2em;

  h3 {
    margin-bottom: 0;
    margin-top: 0.5em;
    font-size: 90%;
  }
`

export const Heading = styled.header`
  color: #fff;
  font-size: 125%;
`

export const Tag = styled(Chip)`
  background-color: transparent;
  border: 1px solid #2972fe;
  color: #2972fe;
  height: 21px;
  font-size: 70%;
`

export const Amount = styled.span`
  color: #2972fe;
  span {
    color: #fff;
    font-size: 70%;
  }
`

export const Label = styled.label<{ size?: string }>`
  color: #fff;
  ${({ size }) => size && `font-size: ${size};`}
  display: flex;
  align-items: center;
  text-transform: capitalize;
`

export const Input = styled(OutlinedInput)`
  background-color: #2972fe1a;
  border-radius: 30px;
  width: 85%;

  input {
    padding: 10px 0 10px 14px;
    font-size: 90%;
  }
`

export const DivideLine = styled(Divider)`
  width: 100%;
  border-color: #282C49;
`
export const HorizontalSpace = styled.div<{height?: string}>`padding-top: ${({height})=> height || '1em'};`

export const MuiCard = styled(Card)<{ width?: string; margin?: string }>`
  width: ${({ width }) => width || '48%'};
  ${({ margin }) => margin && `margin: ${margin};`}
  border-radius: 20px;
  background-color: #131629;
  border: 1px solid #282c49;
`
export const Header = styled(Flex)`
  position: fixed;
  background-color: #131629;
  top: 0;
  z-index: 2;
`

export const PageContent = styled(Flex)`
  padding-top: 5em;
  padding-bottom: 5em;
`