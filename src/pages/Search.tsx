import { SlideTransition } from 'components/Dialog';
import ItemCard from 'components/ItemCard'
import Search from 'components/Search';
import { Component, useEffect, useRef } from 'react'
import { ConfirmationPopup, Flex } from 'styles/common'
import { MAPS_API_KEY } from 'utils/constants';
// import { GoogleMap } from "react-google-maps"



const SearchPage = () => {
  // const ref = useRef();

  // useEffect(() => {
  //   new (window as any).google.maps.Map(ref.current, {
  //     center,
  //     zoom,
  //   });
  // });
    // const { featured } = this.state
    const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
    
    return <>
    ijjijoo
      {/* <GoogleMap key={MAPS_API_KEY}> */}
        {/* <Flex id='map' ref={ref} style={{ flexGrow: "1", height: "100%" }} center={center} zoom={zoom}>
          <Search />
        </Flex> */}
      {/* </GoogleMap> */}
      {/* <ConfirmationPopup hideBackdrop={true} noPopover={true} open={!featured} keepMounted={true} dark={true} TransitionComponent={SlideTransition} bottom='4em'>
        <hr />
        <ItemCard width="100%" margin="1em 0 0 0" />
      </ConfirmationPopup> */}
    </>
}

export default SearchPage
