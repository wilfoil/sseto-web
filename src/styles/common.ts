import styled from '@emotion/styled'
import { Avatar, Button, ButtonProps, Card, Chip, Dialog, Divider, FormControlLabel, IconButton, NativeSelect, OutlinedInput, Tab, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'

interface IGenericProps {
  width?: string
  padding?: string
  sticky?: boolean
  absolute?: boolean
  relative?: boolean
  fixed?: boolean
  top?: string
  bottom?: string
  zIndex?: string
  bg?: string
  flex?: string
  margin?: string
  height?: string
  gap?: string
  radius?: string
}

interface IFlexProps {
  flexChild?: string
  columns?: boolean
  space?: 'space-between' | 'center' | 'space-around' | 'start' | 'end'
  align?: 'flex-start' | 'flex-end'
  wrap?: boolean
}

const columnFlow = ({ columns, wrap }: IFlexProps & IGenericProps) => `flex-flow: ${wrap ? 'wrap' : 'nowrap'} ${columns ? 'column' : 'row'};`
export const flexEl = ({ flexChild }: IFlexProps & IGenericProps) =>
  flexChild &&
  `
  > * {
    width: ${flexChild};
  }
`
const genericStyles = ({padding, width, ...props}: IGenericProps) => {
  const paddingCss = padding ? `padding: ${padding};` : 'padding: 0 10px;';
  const widthCss = width ?  `width: ${width};` : 'width: 100%;';
  let position = '';
  let zIndex = ''
  let top = ''
  let bottom = ''
  let bg = ''
  let flex = ''
  let margin = ''
  let gap = ''
  let radius;
  if(props.sticky) position = 'position: sticky;'
  if(props.absolute) position = 'position: absolute;'
  if(props.relative) position = 'position: relative;'
  if(props.fixed) position = 'position: fixed;'
  if(props.zIndex) zIndex = `z-index: ${props.zIndex};`
  if(props.top) top = `top: ${props.top};`
  if(props.bottom) bottom = `bottom: ${props.bottom};`
  if(props.bg) bg = `background-color: ${props.bg};`
  if(props.flex) flex = `flex: ${props.flex};`
  if(props.margin) margin = `margin: ${props.margin};`
  if(props.gap) gap = `gap: ${props.gap};`
  if(props.radius) radius = `border-radius: ${props.radius};`
  return `
    ${paddingCss}
    ${widthCss}
    ${position}
    ${zIndex}
    ${top}
    ${bottom}
    ${bg}
    ${flex}
    ${margin}
    ${gap}
    ${radius}
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
  bg?: string
}>`
  background: ${({ isActive, bg }) =>
    isActive ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)' : bg || '#2972fe1a'};
  border-radius: ${({ radius }) => radius || '12px'};
  padding: ${({ padding }) => padding || ''};
  ${({ margin }) => margin && `margin: ${margin};`}
  &:hover {
    background: ${({ isActive, bg }) =>
      isActive ? 'linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%)' : bg || '#2972fe1a'};
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

export const Tag = styled(Chip)<IGenericProps>`
  border: 1px solid #2972fe;
  color: ${({variant, color}) => variant === 'filled' ? '' : color};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || '21px'};
  font-size: 70%;
  text-transform: capitalize;
`

export const Amount = styled.span`
  color: #347afc;
  span {
    color: #fff;
    font-size: 70%;
  }
`

export const Label = styled.label<{ size?: string, space?: string } & IGenericProps>`
  color: ${({color}) => color || '#fff'};
  ${({ size }) => size && `font-size: ${size};`}
  display: flex;
  align-items: center;
  ${({ space }) => space && `justify-content: ${space};`}
  text-transform: capitalize;
  ${genericStyles};
  > * {margin: 0;}
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
const variantProp = ({variant}: ButtonProps) => (`
color: ${variant === 'outlined' ? '#347afc' : '#FFF' };
${variant === 'outlined' ? '' : 'background: linear-gradient(315deg, #2972FE -0.12%, #6499FF 99.88%);' }
`)
export const MuiButton = styled(Button)<IGenericProps>`
  border-radius: 30px;
  ${variantProp}
  flex: ${({flex}) => flex || '80%'};
  ${genericStyles};
`
MuiButton.defaultProps = { padding: '12px 0', width: 'auto' }

export const Table = styled.table<IGenericProps>`
  ${genericStyles}
`

export const MuiCard = styled(Card)<{ width?: string; margin?: string }>`
  width: ${({ width }) => width || '48%'};
  ${({ margin }) => margin && `margin: ${margin};`}
  border-radius: 20px;
  background-color: #131629;
  border: 1px solid #282c49;
`
export const Header = styled(Flex)`
  position: fixed;
  top: 0;
  z-index: 2;
`

export const PageContent = styled(Flex)``
PageContent.defaultProps = { padding: '5em 0'}

export const StyledTab = styled(Tab)`
background: #FFF;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  width: 100%;

  &> * { margin-bottom: .6em !important; }
`

export const StyledDialog = styled(Dialog)<{padding?: string, dark?: boolean, bottom?: string, noPopover?: boolean, zIndex?: string}>`
  z-index: ${({ zIndex }) => zIndex};
  [role=dialog] {
    padding: ${({padding}) => padding || '0 1em 1em'};
    ${({dark}) => dark && 'background: #131529;'}
    min-width: 30%;
    color: #666 !important;
  }
`

export const ImageInput = styled.div`
  position: relative;
  padding-bottom: 25px;

  .MuiAvatar-root {
    opacity: 1;
    display: block;
    width: 8rem;
    height: 8rem;
    margin: 0 auto;
    transition: .5s ease;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    max-width:180px;
  }

  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  &:hover {
    MuiAvatar-root { opacity: 0.3 }
    .middle { opacity: 1 }
  }
  input[type=file] { display: none }

  .custom-file-upload {
    display: inline-block;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    background-color: #347afc;
  }
`

export const StyledLabelledControl = styled(FormControlLabel)<{controlWidth?: string}>`
  display: flex;
  justify-content: space-between;
  margin: 0;

  & > :not(span) {
    width: ${({controlWidth}) => controlWidth || '70%'};
  }

  &.label-left > span { margin-right: auto; font-weight: 600; }

  &.full-label > span:nth-child(2) {
    width: 100%;
    display: flex;
    font-weight: 600;    
    span:nth-child(2) { margin-left: auto; color: #2972FE; }
  }

  .MuiSlider-root { padding: 15px 0 !important; width: 95%; align-self: start; }
`

export const StyledTextField = styled(TextField)`
  & input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type=number] { -moz-appearance': textfield }
`
export const StyledImage = styled.img<IGenericProps>`
  border-radius: 5px;
  object-fit: cover;
  margin: ${({margin}) => margin || 'auto'};
`

export const ConfirmationPopup = styled(StyledDialog)`
  ${({noPopover}) => noPopover && `z-index: 1;`}
  [role=dialog] {
    width: 100%;
    bottom: ${({ bottom }) => bottom || 0};
    position: absolute;
    margin: 0;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 2em;
    gap: 20px;
    border-radius: 40px 40px 0px 0px;

    hr {
      width: 40px;
      border: 2px solid #8080808f;
      border-radius: 5px;
      position: absolute;
      top: 0;
    }
  }
`

export const MuiAvatar = styled(Avatar)`
  border-radius: 20px;
  width: 4.4em;
  height: 4em;
`

export const StyledDropdown = styled(NativeSelect)`
color: #000 !important;
select { text-transform: capitalize; }
`