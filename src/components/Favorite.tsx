import FavoritedIcon from '@mui/icons-material/Favorite'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'

const Favorite = ({ saved, onClick, fontSize = 'small' }: { saved: boolean, onClick: () => void, fontSize?: any }) => {
    const Component = saved ? FavoritedIcon : FavoriteIcon;
    return (<Component onClick={onClick} fontSize={fontSize} color='primary' />)
}

export default Favorite;