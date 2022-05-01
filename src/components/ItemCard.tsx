import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Amount, Flex, MuiCard } from './common';
import BedroomIcon from '@mui/icons-material/Hotel';
import BathroomIcon from '@mui/icons-material/Bathtub';
import Favorite from './Favorite';
import Location from './ListingDetails/Location';
import Chip from './ListingDetails/Chip';

const ItemCard = ({item, onClick, ...props}:any) => {
  return (
    <MuiCard {...props}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="150"
          image="/assets/images/apart_1.jpeg"
          alt="Apartment"
        />
        <CardContent sx={{ padding: '5px' }}>
          <Amount>$500,000 <span>/month</span></Amount>
          <Flex padding='8px 0' space='start'>
            <Chip Icon={BedroomIcon} label='2 Beds' />
            <Chip Icon={BathroomIcon} label='2 Baths' />
          </Flex>

          <Flex padding='0'><Location /> <Favorite saved={false} onClick={()=>{}} /></Flex>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

export default ItemCard;