import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Amount, Flex, IconBtn, Label, MuiCard } from './common';
import LocationIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import BedroomIcon from '@mui/icons-material/Hotel';
import BathroomIcon from '@mui/icons-material/Bathtub';

const ItemCard = ({item, ...props}:any) => {
  return (
    <MuiCard {...props}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="/assets/images/apart_1.jpeg"
          alt="Apartment"
        />
        <CardContent sx={{ padding: '5px' }}>
          <Amount>$500,000 <span>/month</span></Amount>
          <Flex padding='8px 0' space='start'>
            <IconBtn padding='0 5px'><BedroomIcon color='primary' sx={{ fontSize: 15 }} />&nbsp;<Label size='50%'>2 Beds</Label></IconBtn>
            <IconBtn padding='0 5px' margin='0 2px'><BathroomIcon color='primary' sx={{ fontSize: 15 }} />&nbsp;<Label size='50%'>2 Baths</Label></IconBtn>
          </Flex>

          <Flex padding='0'><Label size='70%'><LocationIcon color='primary' sx={{ fontSize: 15 }} /> <span>Rubaga, kampala</span></Label><FavoriteIcon fontSize='small' color='primary' /></Flex>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

export default ItemCard;