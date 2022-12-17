import { DivideLine, Flex, Label, HorizontalSpace, Tag, PageContent, IconBtn } from 'styles/common'
import Gallery from 'components/ListingDetails/Gallery'
import Location from 'components/ListingDetails/Location'
import { Component } from 'react'
import BedroomIcon from '@mui/icons-material/Hotel';
import BathroomIcon from '@mui/icons-material/Bathtub';
import SizeIcon from '@mui/icons-material/ZoomOutMap';
import Chip from 'components/ListingDetails/Chip'
import ListingCTA from 'components/mobile/ListingCTA';
import ListingHandler from 'components/ListingHandler';
import Favorite from "components/Favorite"
import NavHeader from 'components/mobile/NavHeader';

class ListingDetails extends Component {
  render() {
    return <>
    <NavHeader><IconBtn><Favorite onClick={()=>{}} saved={false} fontSize='large' /></IconBtn></NavHeader>
    <Gallery images={[]} />
    <PageContent columns style={{paddingTop: 0}}>
    <Flex columns align='flex-start' padding='1em 0 0 0'>
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
      <ListingHandler />
      <Label size='90%' padding='0'><h2>Overview</h2></Label>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Beatae consequatur inventore veniam repudiandae optio facere harum recusandae, 
        ipsa non quia ullam dicta nostrum dolorem eaque laboriosam blanditiis tempora laudantium assumenda?
      </p>
      </PageContent>
    <ListingCTA />
    </>
  }
}

export default ListingDetails
