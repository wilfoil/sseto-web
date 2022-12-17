import { SlideTransition } from 'components/Dialog';
import ItemCard from 'components/ItemCard'
import Search from 'components/Search';
import { useMemo } from 'react'
import { ConfirmationPopup } from 'styles/common'
import { MAPS_API_KEY } from 'utils/constants';
import { GoogleMap, useLoadScript } from "@react-google-maps/api"



const SearchPage = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: MAPS_API_KEY });
  const center = useMemo(() => ({ lat: 0.347596, lng: 32.582520 }), []);
  const zoom = 20;

  if (!isLoaded) return <div>Loading</div>

  return <>
    <GoogleMap mapContainerClassName='map-container' options={{fullscreenControl: false, zoomControl: false, zoom, center, clickableIcons: false}} />
    <Search radius='20px' padding='24px' absolute={true} top='0' />
    
    <ConfirmationPopup hideBackdrop={true} noPopover={true} open keepMounted={true} dark={true} TransitionComponent={SlideTransition} bottom='3.5em'>
        <hr />
        <ItemCard width="100%" margin="1em 0 0 0" />
      </ConfirmationPopup>
  </>
}

export default SearchPage
