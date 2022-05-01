import { DivideLine, Flex, Label, HorizontalSpace, Tag } from 'components/common'
import Gallery from 'components/ListingDetails/Gallery'
import Location from 'components/ListingDetails/Location'
import { Component } from 'react'
import BedroomIcon from '@mui/icons-material/Hotel';
import BathroomIcon from '@mui/icons-material/Bathtub';
import SizeIcon from '@mui/icons-material/ZoomOutMap';
import Chip from 'components/ListingDetails/Chip'

class ListingDetails extends Component {
  render() {
    return <>
    <Gallery />
    <Flex columns align='flex-start' padding='1em 10px 0 10px'>
      <Tag label='Apartment' />
      <HorizontalSpace height='.5em' />
      <Label>2 bedroom apartment</Label>
      <HorizontalSpace height='.5em' />
      <Location />
      <Flex padding='1em 0' space='start'>
        <Chip Icon={BedroomIcon} label='2 Beds' />
            <Chip Icon={BathroomIcon} label='2 Baths' />
            <Chip Icon={SizeIcon} label='1,288 sqft' /></Flex>
      <DivideLine />
    </Flex>
    </>
  }
}

export default ListingDetails
